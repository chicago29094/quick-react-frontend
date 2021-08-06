import { useEffect, useState} from 'react';
import { Switch, Route, useLocation } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import { TopHeader } from './components/TopHeader';
import { MainContent } from './components/MainContent';
import { About } from './components/About';
import { Documentation } from './components/Documentation';
import { Register } from './components/Register';
import { Login } from './components/Login';
import { Logout } from './components/Logout';
import { MyProjects } from './components/MyProjects';
import { Footer } from './components/Footer';

import './App.css';

function App() {

  let location = useLocation();


  return (
    <div className="App">

    <Container>
      <TopHeader />

      <Switch>
        <Route path="/" exact>
          <MainContent />
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
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/logout" exact>
          <Logout />
        </Route>
        <Route path="/myprojects" exact>
          <MyProjects />
        </Route>
      </Switch>

      <Footer />
    </Container>

    </div>
  );


}

export default App;
