import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect, useContext } from 'react';
import { SessionContext } from '../../App';
import { SessionDispatchContext } from '../../App';

export const Logout = (props) => {

    const session = useContext(SessionContext);
    const dispatch = useContext(SessionDispatchContext);
 
    const _handleUserLogout = () => {

        localStorage.removeItem('quickreactsession');

        dispatch({"type": "SessionLogout", "session": {} } );
    }
    

    useEffect( () => {
        _handleUserLogout();
        // eslint-disable-next-line
    }, []);

    return (
        <>
        </>
    )
};

export default Logout;

