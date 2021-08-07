import { useState, useEffect } from "react";
import { Form, FloatingLabel, Button } from "react-bootstrap"
import { Spinner } from '../Spinner';
import { Container, Row, Col } from 'react-bootstrap';

export const Register = (props) => {

const initialFormValues = {
  "email": "",
  "fullname": "",
  "comments": "",
}

const [formValues, setFormValues] = useState(initialFormValues);

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

const _handleSubmit = async (event) => {
  setFormStatus({showStatus:true, showSpinner:true, message: {__html: ""} });
  event.preventDefault();
  try {
    const API_ENDPOINT = '/portfoliocontact/contact';
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      body: new URLSearchParams(formValues),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
    });
    const responseHTML = await response.text();
    if (response.status === 200) {

      setFormStatus({showStatus:true, showSpinner:false, message: { __html: responseHTML } } );

      setTimeout( () => { setFormStatus(initialFormSubmitStatus); setFormValues(initialFormValues); }, 8000 );

    }
    else {
      console.err(responseHTML);
      setFormStatus({showStatus:true, showSpinner:false, message: { __html: "Your comments weren't posted successfully.  Please try again."} } );
    }
  } catch (err) {
    setFormStatus({showStatus: true, showSpinner:false, message: { __html: "Your comments could not be sent at this time.  Please try again in a moment."} } );
    console.log(err);
  }
};

    return (
        <>
        <h1 className="main-page-header-left">CONTACT</h1>

        <p>Please feel free to connect with me via LinkedIn, <a href="https://www.linkedin.com/in/harry-anastopoulos/" target="_blank" rel="noreferrer" alt="LinkedIn Link">https://www.linkedin.com/in/harry-anastopoulos/</a>, my GitHub Projects and Repo pages, <a href="https://github.com/chicago29094/" target="_blank" rel="noreferrer" alt="GitHub">https://github.com/chicago29094/</a>, or using the contact form below.</p>

        <p>&nbsp;</p>

        <Form onSubmit={_handleSubmit}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" onChange={_handleChange} value={formValues.email} placeholder="name@example.com" required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="fullname">
            <Form.Label>Your Full Name</Form.Label>
            <Form.Control type="fullname" onChange={_handleChange} value={formValues.fullname} placeholder="Full Name Required" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="comments">
          <Form.Label>Comments</Form.Label>
            <Form.Control
              as="textarea"
              name="comments"
              value={formValues.comments}
              onChange={_handleChange}
              placeholder="Leave a comment here."
              style={{ height: '200px' }}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit Contact Form
          </Button>

        </Form>
        <Spinner props={formStatus} />

      </>
    )
} 

export default Register;

