import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect, useContext } from 'react';
import { SessionContext } from '../../App';

export const Logout = (props) => {

    const sessionContext = useContext(SessionContext);
 
    // handle user form login request 
    const _handleUserLogout = async () => {
        
        try {
            const API_ENDPOINT = 'https://bookstop-api.herokuapp.com/users/logout/user';
            const response = await fetch(API_ENDPOINT, {
                method: 'PUT',
                body: JSON.stringify({_id: "tttt"}),
                headers: {
                    'Content-Type': 'application/json'
                },
            });     
            const data = await response.json();
            if (response.status === 200) {
                // localStorage.setItem('BookStopUser', data._id );
                localStorage.removeItem('BookStopUser');
                // localStorage.getItem('BookStopUser');
            }
        } catch (err) {
            console.log(err)
        }
    };

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

