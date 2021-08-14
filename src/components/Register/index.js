import { useState, useEffect } from "react";
import { Form, FloatingLabel, Button, Alert } from "react-bootstrap"
import { useHistory } from "react-router-dom";
import { LoadingSpinner } from '../LoadingSpinner';
import { Container, Row, Col } from 'react-bootstrap';
import BASE_API_URL from './utils/apiConfig';
import storage_log from "../../utils/storage_log";

export const Register = (props) => {

const initialFormValues = {
  "first_name": "",
  "last_name": "",
  "title": "",
  "company": "",
  "email": "",
  "password": "",
  "confirm_password": "",
}

const [formValues, setFormValues] = useState(initialFormValues);
const [formError, setFormError] = useState(false);
const [registered, setRegistered] = useState(false);

let history = useHistory();

const initialFormSubmitStatus = {
  showStatus: false,
  showSpinner: false,
  message: "",
};

const [formStatus, setFormStatus] = useState(initialFormSubmitStatus);

const _handleChange = (event) => {
  setFormValues((prevState) => {
    // console.log(prevState)

    return {
      ...prevState,
      [event.target.id]: event.target.value,
    };
  });
};

const _handleVerifyForm = (event) => {
    if (formValues.password !== formValues.confirm_password) {
        setFormError(true);
    } else {
        setFormError(false);
    }     
}



    /*===============================================================================*/
    // handle user form login request 
    
    const _handleRegistration = async (event) => {
 
        event.preventDefault();

        setFormStatus({showStatus:true, showSpinner:true, message: { __html: ""} });
    
        const API_URI=`${BASE_API_URL}/api/register`;
    
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
            storage_log('Register', response.status);
            storage_log('Register', data);
            
            if ( (response.status===200) || (response.status===201) ) {
                setFormStatus({showStatus:true, showSpinner:false, message: { __html: "You have successfully registered.  You will be directed to log in page to access your account."} } );
                setFormValues(initialFormValues);
                setRegistered(true);
            }
            else if ( (response.status===400) || (response.status===401) ) {
                if (data.ErrorMessage !== undefined) {
                    setFormStatus({showStatus: true, showSpinner:false, message: { __html: `Your registration failed. ${data.ErrorMessage} `} } );
                    setRegistered(false);
                }
                else {
                    setFormStatus({showStatus: true, showSpinner:false, message: { __html: "Your registration failed.  Check your input and try again."} } );
                    setRegistered(false);
                }
            }
            else if (response.status===503) {
                if (data.ErrorMessage !== undefined) {
                    setFormStatus({showStatus: true, showSpinner:false, message: { __html: `Your registration failed. ${data.ErrorMessage} `} } );
                    setRegistered(false);
                } 
                else {
                    setFormStatus({showStatus: true, showSpinner:false, message: { __html: "Your registration failed.  Check your input and try again."} } );
                    setRegistered(false);
                }  
            }
            else {
                setFormStatus({showStatus: true, showSpinner:false, message: { __html: "Your registration failed.  Check your input and try again."} } );
                setRegistered(false);
            }
    
            
        } catch(error) {
            setFormStatus({showStatus: true, showSpinner:false, message: { __html: "Your registration failed.  Check your input and try again."} } );
            setRegistered(false);
        }
    
      } 
    
    // Upon a successful registration, send the user to the /login route after a 4 second delay
    useEffect(() => {
        if (registered===true) {
            setTimeout(() => {
                history.push('/login');
            }, 4000);
        }
        }, [registered, history]);



    return (
        <>
        <h1 className="main-page-header-left">REGISTER</h1>

        <p>Please register to create a user account so you can create, save, and download your Quick-React markup files for your React projects.</p>

        <p>&nbsp;</p>

        <Form onSubmit={_handleRegistration}>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>*Email address</Form.Label>
            <Form.Control type="email" onChange={_handleChange} value={formValues.email} placeholder="name@example.com" required/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="first_name">
            <Form.Label>*First Name</Form.Label>
            <Form.Control type="text" onChange={_handleChange} value={formValues.first_name} placeholder="First Name Required" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="last_name">
            <Form.Label>*Last Name</Form.Label>
            <Form.Control type="last_name" onChange={_handleChange} value={formValues.last_name} placeholder="Last Name Required" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" onChange={_handleChange} value={formValues.title} placeholder="Title" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="company">
            <Form.Label>Company</Form.Label>
            <Form.Control type="text" onChange={_handleChange} value={formValues.company} placeholder="Company" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>*Select Password</Form.Label>
            <Form.Control type="password" onChange={_handleChange} value={formValues.password} placeholder="Password Required" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="confirm_password">
            <Form.Label>*Confirm Password</Form.Label>
            <Form.Control type="password" onChange={_handleChange} onBlur={_handleVerifyForm} value={formValues.confirm_password} placeholder="Confirm Password Required" required />
          </Form.Group>
          {formError && <Alert variant='danger'>Passwords must match!</Alert>}

          <Button variant="primary" type="submit" disabled={formError}>
            Submit Quick-React Registration Form
          </Button>

        </Form>
        <LoadingSpinner props={formStatus} />

      </>
    )
} 

export default Register;

