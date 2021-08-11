import { useEffect, useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";
import { Form, FloatingLabel, Alert } from "react-bootstrap";
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import Overlay from 'react-bootstrap/Overlay';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { SessionContext } from '../../App';
import { SessionDispatchContext } from '../../App';
import { LoadingSpinner } from '../LoadingSpinner';
import { storage_log } from '../../utils/storage_log.js'
import { PlusCircleFill as FilePlus} from 'react-bootstrap-icons';
import { FileCodeFill as FileEdit} from 'react-bootstrap-icons';
import { TrashFill as FileDelete} from 'react-bootstrap-icons';


export const MyProjectAdmin = (props) => {

    const session = useContext(SessionContext);
    const dispatch = useContext(SessionDispatchContext);

    const history = useHistory();

    const params = useParams();
    let projectID = null;

    if (params.id !== undefined) {
        projectID = params.id;
    }

    const initialFormValues = {
        "project_name": "",
        "project_description": "",
        "project_markup": "",
        "project_filepath": "",
        "project_archive": "",
        "update_type": "",
    }
      
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formError, setFormError] = useState(false);
    const [projectUpdated, setProjectUpdated] = useState(false);
    
    const initialFormSubmitStatus = {
        showStatus: false,
        showSpinner: false,
        message: "",
    };
      
    const [formStatus, setFormStatus] = useState(initialFormSubmitStatus);    

    /*===================================================================================================*/

    useEffect(() => {
     
        async function _handleLoadProject() {
  
            if ((session === undefined) || (session.token === undefined) || (projectID === null ) ) {
                return;
            }

            // The endpoint for retrieving a user project.  The user's bearer token will provide the user context to the back ebd.
            const API_URI = `${process.env.REACT_APP_QR_API_ENDPOINT}/project/${projectID}`;

            try {
                const response = await fetch(API_URI, {
                    "method": 'GET',
                    "headers": {
                        "Content-Type": 'application/json',
                        "Authorization": `Bearer ${session.token}`
                    }
                });

                // All responses should be in JSON from the quick-react API
                const data = await response.json();

                storage_log('MyProjects: useEffect: _handleLoadProjects: ', data, data.length, response.status)

                if (response.status === 200) {
                    if (data.project_name===null) data.project_name="";
                    if (data.project_description===null) data.project_description="";
                    if (data.project_markup===null) data.project_markup="";
                    if (data.project_filepath===null) data.project_filepath="";
                    if (data.project_archive===null) data.project_archive="";                
                    setFormValues(data);
                    return;
                }
                else if (response.status === 401) {
                    if (data.ErrorMessage !== undefined) {
                        console.error(`An error was encountered while requesting the user\'s quick-react project. ${data.ErrorMessage}`);
                        return;
                    }
                    else {
                        console.error(`An error was encountered while requesting the user\'s quick-react project.`);
                        return;
                    }
                }
                else if (response.status === 503) {
                    if (data.ErrorMessage !== undefined) {
                        console.error(`An error was encountered while requesting the user\'s quick-react project. ${data.ErrorMessage}`);
                        return;
                    }
                    else {
                        console.error(`An error was encountered while requesting the user\'s quick-react project.`);
                        return;
                    }
                }
            } catch (error) {
                console.error(`An error was encountered while requesting the user\'s quick-react project.`);
                return;
            }
        }
        _handleLoadProject();
    }
    , [session, session.last_access]);


    /*===================================================================================================*/

    const _handleChange = (event) => {
        setFormValues((prevState) => {
            // console.log(prevState)
            return {
                ...prevState,
                [event.target.id]: event.target.value,
            };
        });
    };
      
    /*===============================================================================*/
    // handle user form login request 

    const _handleProjectUpdate = async (event, update_type) => {
        
        event.preventDefault();

        if ((session === undefined) || (session.token === undefined) || (projectID === null ) ) {
            return;
        }

        setFormStatus({showStatus:true, showSpinner:true, message: { __html: ""} });

        let API_URI=`${process.env.REACT_APP_QR_API_ENDPOINT}/project/${projectID}`;
        if (update_type==='zip_submit') {
            API_URI=`${process.env.REACT_APP_QR_API_ENDPOINT}/project/download/${projectID}`;
        }

        try {
            const response = await fetch(API_URI, {
                "method": 'PUT',
                "body": JSON.stringify(formValues),
                "headers": {
                    "Content-Type": 'application/json',
                    "Authorization": `Bearer ${session.token}`
                }
            });

            if (update_type==='zip_submit') {  
                const data = await response.blob();
                // console.log(data);
                // const file = window.URL.createObjectURL(data);
                // console.log(file);
                // window.location.assign(file);    

                let zipLink = document.createElement('a');
                zipLink.href = URL.createObjectURL(data);
                zipLink.setAttribute('download', 'quick-react-project.zip');
                zipLink.click();

                setFormStatus({showStatus:true, showSpinner:false, message: { __html: "Your project updates have been saved."} } );
                setProjectUpdated(true);
                setTimeout( () => {setFormStatus({showStatus:false, showSpinner:false, message: { __html: ""} });}, 5000);              
                return;     
            }
            
            // All responses should be in JSON from the quick-react API
            const data = await response.json();
            storage_log('_handleProjectUpdate', response.status);
            storage_log('_handleProjectUpdate', data);

            if ( (response.status===200) || (response.status===201) ) {
                setFormStatus({showStatus:true, showSpinner:false, message: { __html: "Your project updates have been saved."} } );
                setProjectUpdated(true);
                setTimeout( () => {setFormStatus({showStatus:false, showSpinner:false, message: { __html: ""} });}, 5000);
            }
            else if ( (response.status===400) || (response.status===401) ) {
                if (data.ErrorMessage !== undefined) {
                    setFormStatus({showStatus: true, showSpinner:false, message: { __html: `Your project updates were not successfully saved. ${data.ErrorMessage} `} } );
                    setProjectUpdated(false);
                }
                else {
                    setFormStatus({showStatus: true, showSpinner:false, message: { __html: "Your project updates were not successfully saved.  Check your input and try again."} } );
                    setProjectUpdated(false);
                }
            }
            else if (response.status===503) {
                if (data.ErrorMessage !== undefined) {
                    setFormStatus({showStatus: true, showSpinner:false, message: { __html: `Your project updates were not successfully saved. ${data.ErrorMessage} `} } );
                    setProjectUpdated(false);
                } 
                else {
                    setFormStatus({showStatus: true, showSpinner:false, message: { __html: "Your project updates were not successfully saved.  Check your input and try again."} } );
                    setProjectUpdated(false);
                }  
            }
            else {
                setFormStatus({showStatus: true, showSpinner:false, message: { __html: "Your project updates were not successfully saved.  Check your input and try again."} } );
                setProjectUpdated(false);
            }

        } catch(error) {
            setFormStatus({showStatus: true, showSpinner:false, message: { __html: "Your project updates were not successfully saved.  Check your input and try again."} } );
            setProjectUpdated(false);
        }
    }   
      

    /*===================================================================================================*/

    return (
        <>
        <h1 className="project-page-header-left">MY PROJECTS</h1>
        <h2 className="project-page-subheader-left">Project Settings and Administration</h2>

        <p>You may utilize the form below to edit your Quick-React project details and markup. Your Quick-React project
            package can be downloaded in ZIP or GZIP format for installation in your initialized React development 
            project root directory.</p>

        <Form onSubmit={_handleProjectUpdate} className="project-form">

          <Form.Group className="mb-3" controlId="project_name">
            <Form.Label>*Project Name</Form.Label>
            <Form.Control type="project_name" onChange={_handleChange} value={formValues.project_name} placeholder="Project Name" required/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="project_description">
            <Form.Label>*Project Description</Form.Label>
            <Form.Control
              as="textarea"
              name="project_description"
              value={formValues.project_description}
              onChange={_handleChange}
              placeholder="Project Description"
              style={{ height: '100px' }}
              required
            />            
          </Form.Group>

          <Form.Group className="mb-3" controlId="project_markup">
            <Form.Label>Project Quick-React Markup Code</Form.Label>
            <Form.Control
              as="textarea"
              name="project_markup"
              value={formValues.project_markup}
              onChange={_handleChange}
              placeholder=""
              style={{ height: '400px' }}
              className="quickreact-code"
            />            
          </Form.Group>

          <Button variant="primary" id="update_submit" name="update_submit" onClick={ (event) => _handleProjectUpdate(event, "update_submit") } disabled={formError}>
            Update Quick-React Project
          </Button>

          <Button variant="secondary" id="zip_submit" name="zip_submit"  onClick={ (event) => _handleProjectUpdate(event, "zip_submit") } disabled={formError}>
            Download React Zip Package
          </Button>          

          {/* <Button variant="secondary" id="gzip_submit" name="gzip_submit"  onClick={ (event) => _handleProjectUpdate(event, "gzip_submit") } disabled={formError}>
            Download React GZIP Package
          </Button>           */}

        </Form>
        <LoadingSpinner props={formStatus} />

      </>
    )    

}

export default MyProjectAdmin;

