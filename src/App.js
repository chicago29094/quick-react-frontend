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

export const App = (props) => {

  const initialSession = {
    first_name: "",
    last_name: "",
    title: "",
    company: "",
    email: "",
    created: "",
    last_access: "",
    jwt: "",
  }

  let location = useLocation();
  const [user, setUser] = useState(null);



  // This useReducer hooks calls local functions to handle the requested actions
  function sessionReducer(state, action) {
    storage_log('SR-state=', state);
    storage_log('SR-action=', action);
 
    switch (action.type) {
      case 'SessionUpdate':
        return (action.session);
      default:
        return session;
    }
  }

  // This defines the initial session authentication object and the session reducer dispatch function
  const [session, dispatch] = useReducer(sessionReducer, initialSession);

  // User Login Handler
  // User Session Update Handler
  // User Logout Handler


  return (
    <div className="App">

    <SessionContext.Provider value={ { 'session': session, 'dispatch': dispatch } } >

    <Container>

      <TopHeader />

          <MainContent />

          <Switch>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/logout" exact>
              <Logout />
            </Route>
        </Switch>

      <Footer />

    </Container>

    </SessionContext.Provider>

    </div>
  );


}

export default App;
