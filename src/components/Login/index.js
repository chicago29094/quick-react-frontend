import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { useState, useEffect, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { SessionContext } from '../../App';
import { Spinner } from '../Spinner';
import { storage_log } from '../../utils/storage_log.js'
 
export const Login = (props) => {

    // This is utilized to redirect the logged in used to the My Projects page.
    let history = useHistory();
    const session = useContext(SessionContext);

    //storage_log(session);
    //storage_log(props);

    // This is used by the bootstrap modal for window display control
    const [show, setShow] = useState(true);
    const _handleClose = () => setShow(false);
  
    const initialFormSubmitStatus = {
        showStatus: false,
        showSpinner: false,
        message: "",
    };

    const [formStatus, setFormStatus] = useState(initialFormSubmitStatus);
    const [loggedIn, setLoggedIn] = useState(false);

    // Login form initial form values on this component
    const initialFormValues = {
        email: '',
        password: '',
    };

    // Controlled form state
    const [formValues, setFormValues] = useState(initialFormValues);


    /*===============================================================================*/
    // handle user form login request 
    
    const _handleUserLogin = async (event) => {
 
    event.preventDefault();
    storage_log(formValues);
    setFormStatus({showStatus:true, showSpinner:true, message: { __html: ""} });

    const API_URI=`${process.env.REACT_APP_QR_API_ENDPOINT}/api/login`;

    try {
        const response = await fetch(API_URI, {
            "method": 'POST',
            "body": JSON.stringify(formValues),
            "headers": {
                "Content-Type": 'application/json'
            }
        });

        // All responses should be in JSON from the quick-react API
        const data = await response.json();
        storage_log('_handleUserLogin=');
        storage_log(data);
        storage_log(response.status);
        storage_log('=End');
        console.log(data);

        console.log(response.status);
        if (response.status===200) {
            setFormStatus({showStatus:true, showSpinner:false, message: { __html: "You have successfully logged in"} } );
            setLoggedIn(true);

            session.dispatch({'type':"SessionUpdate", "session": data })
        }
        else if (response.status===401) {
            if (data.ErrorMessage !== undefined) {
                setFormStatus({showStatus: true, showSpinner:false, message: { __html: `Log in failed. ${data.ErrorMessage} `} } );
            }
            else {
                setFormStatus({showStatus: true, showSpinner:false, message: { __html: "Log in failed.  Check your credentials and try again."} } );
            }
            setLoggedIn(false);    
        }
        else if (response.status===503) {
            if (data.ErrorMessage !== undefined) {
                setFormStatus({showStatus: true, showSpinner:false, message: { __html: `Log in failed. ${data.ErrorMessage} `} } );
            } 
            else {
                setFormStatus({showStatus: true, showSpinner:false, message: { __html: "Log in failed.  Check your credentials and try again."} } );
            }  
            setLoggedIn(false);    
        }

        
    } catch(error) {

    }

  } 

    /*===============================================================================*/
    // Upon a successful login, send the user to the /home route after a 2 second delay
    useEffect(() => {
        if (loggedIn===true) {
            setTimeout(() => {
                history.push('/myprojects');
            }, 2000);
        }
      }, [loggedIn, history]);



    // handle form change function
    const _handleChange = (e) => {
        setFormValues((prevState) => {
            return {
                ...prevState,
                [e.target.id]: e.target.value,
            };
        });
    };

 
    return (

        <Modal show={show} onHide={_handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Registered User Log In</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <div className="login-form-container">
                    <form onSubmit={_handleUserLogin} className="login-form">
                        <p>New User?  Click to <a href="/register">register</a> for an account.</p>
                        <fieldset>
                            <label htmlFor='email'>E-mail: </label>
                                <input
                                    type='text'
                                    id='email'
                                    value={formValues.email}
                                    onChange={_handleChange}
                                    required
                                />  
                        </fieldset>
                        <fieldset>
                            <label htmlFor='password'>Password: </label>
                                <input
                                    type='password'
                                    id='password'
                                    value={formValues.password}
                                    onChange={_handleChange}
                                    required
                                />
                        </fieldset>
                        <input type='submit' value='Login to Quick-React' className="btn btn-primary"/>
                        {/* FormStatus Component*/}
                        <Spinner props={formStatus} />         
                    </form>
                </div>

            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={_handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>


    )
};

export default Login;




