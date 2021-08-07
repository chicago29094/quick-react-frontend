import React  from 'react';
import { useEffect, useState, useContext } from 'react';
import { Switch, Route, useLocation } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import { Home } from '../Home';
import { About } from '../About';
import { Documentation } from '../Documentation';
import { Register } from '../Register';
import { MyProjects } from '../MyProjects';

export const MainContent = (props) => {

    return (
        <div>
           <h1 className="main-page-header-left">Main Content</h1>
           <Container>

            <Switch>
                <Route path="/" exact>
                <Home />
                </Route>
                <Route path="/about" exact>
                <About />
                </Route>
                <Route path="/documentation" exact>
                <Documentation />
                </Route>
                <Route path="/register" exact>
                <Register />
                </Route>
                <Route path="/myprojects" exact>
                <MyProjects />
                </Route>
            </Switch>
    
            </Container>
        </div>
    )
} 

export default MainContent;