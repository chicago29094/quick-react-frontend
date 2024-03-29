import React  from 'react';
import { useEffect, useState, useContext } from 'react';
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import { Home } from '../Home';
import { About } from '../About';
import { Documentation } from '../Documentation';
import { Register } from '../Register';
import { MyProjects } from '../MyProjects';
import { MyProjectAdmin } from '../MyProjectAdmin';
import { Login } from '../Login';
import { SessionContext } from '../../App';
import { SessionDispatchContext } from '../../App';
import { storage_log } from '../../utils/storage_log.js'

export const MainContent = (props) => {

    const session = useContext(SessionContext);

    return (
        <div className="main-content">
           {/* <h1 className="main-page-header-left">Main Content</h1> */}
           <Container>

            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/login" exact>
                    <Home />
                </Route>
                <Route path="/logout" exact>
                    <Home />
                </Route>                                
                <Route path="/about" exact>
                    <About />
                </Route>
                <Route path="/documentation">
                    <Documentation />
                </Route>
                <Route path="/register" exact>
                    <Register />
                </Route>
                <Route path="/myproject/admin/:id" exact>
                {            
                    session!==undefined && session._id && session.token ? ( 
                        <MyProjectAdmin /> 
                    )
                    : (
                        <Redirect to={{ pathname: "/login"}} />
                    )
                    
                }
                </Route>
                <Route path="/myprojects" exact>
                {            
                    session!==undefined && session._id && session.token ? ( 
                        <MyProjects /> 
                    )
                    : (
                        <Redirect to={{ pathname: "/login"}} />
                    )
                    
                }
                </Route>
            </Switch>
    
            </Container>
        </div>
    )
} 

export default MainContent;