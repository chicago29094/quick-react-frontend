import {Image} from 'react-bootstrap';
import { useEffect, useState, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { SessionContext } from '../../App';
import { SessionDispatchContext } from '../../App';

export const MyProjects = (props) => {

    const session = useContext(SessionContext);
    const dispatch = useContext(SessionDispatchContext);

    return (
        <div>
           <h1 className="main-page-header-left">MY PROJECTS</h1>

    

        </div>
    )
} 

export default MyProjects;