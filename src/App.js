import React  from 'react';
import { useEffect, useState, useContext, useReducer } from 'react';
import { Switch, Route, useLocation } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import { TopHeader } from './components/TopHeader';
import { MainContent } from './components/MainContent';
import { Login } from './components/Login';
import { Logout } from './components/Logout';
import { Footer } from './components/Footer';
import './App.css';
import storage_log from './utils/storage_log';

// Declare useContext context to pass session state and dispatch context to lower components
export const SessionContext = React.createContext(); 
export const SessionDispatchContext = React.createContext(); 

export const App = (props) => {

  const _initializeSession = () => {

      const initialSession = {
        _id: "",
        first_name: "",
        last_name: "",
        title: "",
        company: "",
        email: "",
        created: "",
        last_access: "",
        token: "",
      }

      const getSession = localStorage.getItem('quickreactsession');
      if (getSession===null) {
        storage_log('App.js: _initializeSession: getSession is null');
        return initialSession;
      }
  
      const storageJSON = JSON.parse(getSession);
      if ( (storageJSON===null) || (storageJSON._id===undefined) || (storageJSON.token===undefined) ) {
        return initialSession;
      }

      initialSession._id=storageJSON._id;
      initialSession.first_name=storageJSON.first_name;
      initialSession.last_name=storageJSON.last_name;
      initialSession.token=storageJSON.token;
      
      return initialSession;
  }


  let location = useLocation();

  // This useReducer hooks calls local functions to handle the requested actions
  function sessionReducer(state, action) {

    const initialSession = {
      _id: "",
      first_name: "",
      last_name: "",
      title: "",
      company: "",
      email: "",
      created: "",
      last_access: "",
      token: "",
    }

    switch (action.type) {
      case 'SessionUpdate':
        return action.session;
      case 'SessionLogout':
          return initialSession;        
      default:
        return session;
    }
  }
  

  /*===================================================================================================*/

  useEffect( () => {    

      async function _handleVerifyUser() {

        const initialSession = {
          _id: "",
          first_name: "",
          last_name: "",
          title: "",
          company: "",
          email: "",
          created: "",
          last_access: "",
          token: "",
        }

        // Verify whether the local storage stored information is correct and load the full session details if, so.
        const getSession = localStorage.getItem('quickreactsession');
        if (getSession===null) {
          storage_log('App.js: _handleVerifyUser: getSession is null');
          dispatch({"type": "SessionUpdate", "session": initialSession});
          return;
        }

        const storageJSON = JSON.parse(getSession);
        if ( (storageJSON===null) || (storageJSON._id===undefined) || (storageJSON.token===undefined) ) {
          dispatch({"type": "SessionUpdate", "session": initialSession});
          return;
        }
      
        // There is a store user_id and JWT in local storage.  Let's see if it is valid and retrieve the corresponding user record.
        const API_URI=`${process.env.REACT_APP_QR_API_ENDPOINT}/api/user/${storageJSON._id}`;

        try {
            const response = await fetch(API_URI, {
                "method": 'GET',
                "headers": {
                    "Content-Type": 'application/json',
                    "Authorization": `Bearer ${storageJSON.token}`
                }
            });

            // All responses should be in JSON from the quick-react API
            const data = await response.json();

            if (response.status===200) {
              data.token=storageJSON.token;      
              return data     
            }
            else if (response.status===401) {
                if (data.ErrorMessage !== undefined) {
                  console.error(`An error was encountered while requesting the user\'s information. ${data.ErrorMessage}`);
                  dispatch({"type": "SessionUpdate", "session": initialSession});
                  return;
                }
                else {
                  console.error(`An error was encountered while requesting the user\'s information.`);
                  dispatch({"type": "SessionUpdate", "session": initialSession});
                  return;
                }
            }
            else if (response.status===503) {
                if (data.ErrorMessage !== undefined) {
                  console.error(`An error was encountered while requesting the user\'s information. ${data.ErrorMessage}`);
                  dispatch({"type": "SessionUpdate", "session": initialSession});
                  return;
                } 
                else {
                  console.error(`An error was encountered while requesting the user\'s information.`);
                  dispatch({"type": "SessionUpdate", "session": initialSession});
                  return;
                }  
            }  
        } catch(error) {
          console.error(`An error was encountered while requesting the user\'s information.`);
          dispatch({"type": "SessionUpdate", "session": initialSession});
          return;
        }
      }
    _handleVerifyUser();
  }
  ,[]);


  // This defines the initial session authentication object and the session reducer dispatch function
  const [session, dispatch] = useReducer(sessionReducer, _initializeSession() );

  return (
    <div className="App">

    <SessionContext.Provider value={session} >
    <SessionDispatchContext.Provider value={dispatch} >

    <Container className="app-container">

      <Row>
        <TopHeader />
      </Row>
      
      <Row>
        <MainContent/>
          <Switch>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/logout" exact>
              <Logout />
            </Route>
        </Switch>
      </Row>

      <Row>
        <Footer />
      </Row>
      
    </Container>

    </SessionDispatchContext.Provider>
    </SessionContext.Provider>

    </div>
  );


}

export default App;
