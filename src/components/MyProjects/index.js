import { useEffect, useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import Overlay from 'react-bootstrap/Overlay';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { SessionContext } from '../../App';
import { SessionDispatchContext } from '../../App';
import { LoadingSpinner } from '../LoadingSpinner';
import BASE_API_URL from '../../utils/apiConfig';
import { storage_log } from '../../utils/storage_log.js'
import { PlusCircleFill as FilePlus} from 'react-bootstrap-icons';
import { FileCodeFill as FileEdit} from 'react-bootstrap-icons';
import { TrashFill as FileDelete} from 'react-bootstrap-icons';


export const MyProjects = (props) => {

    const session = useContext(SessionContext);
    const dispatch = useContext(SessionDispatchContext);

    const [projectsLoading, setProjectsLoading] = useState(false);
    const [projects, setProjects] = useState([]);

    const history = useHistory();

    // setInterval(() => {
    //     storage_log(`${Date.now()} MyProjects:`, session );
    // }, 2000);

    /*===================================================================================================*/

    useEffect(() => {

        async function _handleLoadProjects() {
  
            const userProject = {
                _id: "",
                project_name: "",
                project_description: "",
                project_markup: "",
                project_filepath: "",
                project_archive: "",
            };

            if ((session === undefined) || (session.token === undefined)) {
                return;
            }

            // The endpoint for retrieving all user projects.  The user's bearer token will provide the user context to the back ebd.
            const API_URI = `${BASE_API_URL}/project/`;

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

                if (response.status === 200) {
                    setProjects(data);
                    return;
                }
                else if (response.status === 401) {
                    if (data.ErrorMessage !== undefined) {
                        console.error(`An error was encountered while requesting the user\'s quick-react projects. ${data.ErrorMessage}`);
                        return;
                    }
                    else {
                        console.error(`An error was encountered while requesting the user\'s quick-react projects.`);
                        return;
                    }
                }
                else if (response.status === 503) {
                    if (data.ErrorMessage !== undefined) {
                        console.error(`An error was encountered while requesting the user\'s quick-react projects. ${data.ErrorMessage}`);
                        return;
                    }
                    else {
                        console.error(`An error was encountered while requesting the user\'s quick-react projects.`);
                        return;
                    }
                }
            } catch (error) {
                console.error(`An error was encountered while requesting the user\'s quick-react projects.`);
                return;
            }
        }
        _handleLoadProjects();
    }
    , [session, session.last_access]);


    /*===================================================================================================*/
    // handle add project request
    
    const _handleAddProject = async (event) => {
 
        event.preventDefault();

        const userProject = {
            project_name: "New Unedited Project",
            project_description: "Add your project description here.",
        };

        if ((session === undefined) || (session.token === undefined)) {
            return;
        }        

        const API_URI=`${BASE_API_URL}/project/`;
    
        try {
            const response = await fetch(API_URI, {
                "method": 'POST',
                "body": JSON.stringify(userProject),
                "headers": {
                    "Content-Type": 'application/json',
                    "Authorization": `Bearer ${session.token}`                   
                }
            });
    
            // All responses should be in JSON from the quick-react API
            const data = await response.json();
            
            if ( (response.status===200) || (response.status===201) ) {
                dispatch( { "type": "SessionUpdateLastAccess", "session": session } );
                return;
            }
            else if ( (response.status===400) || (response.status===401) ) {
                if (data.ErrorMessage !== undefined) {
                    console.error(`A new project could not be added. ${data.ErrorMessage}`);
                    return;
                }
                else {
                    console.error(`A new project could not be added.`);
                    return;
                }
            }
            else if (response.status===503) {
                if (data.ErrorMessage !== undefined) {
                    console.error(`A new project could not be added. ${data.ErrorMessage}`);
                    return;
                } 
                else {
                    console.error(`A new project could not be added.`);
                    return;
                }  
            }
            else {
                console.error(`A new project could not be added.`);
                return;               
            }
    
            
        } catch(error) {
            console.error(`A new project could not be added.`);
            return;
        }
    
      } 

    /*===================================================================================================*/

    const _handleDeleteProject = async (event, projectID) => {

        event.preventDefault();    

        if ((session === undefined) || (session.token === undefined)) {
            return;
        }        

        if ((projectID === undefined) || (projectID === null)) {
            return;
        }        

        const API_URI=`${BASE_API_URL}/project/${projectID}`;
    
        try {
            const response = await fetch(API_URI, {
                "method": 'DELETE',
                "headers": {
                    "Content-Type": 'application/json',
                    "Authorization": `Bearer ${session.token}`                   
                }
            });
    
            // All responses should be in JSON from the quick-react API
            const data = await response.json();
            
            if ( (response.status===200) || (response.status===201) ) {
                dispatch( { "type": "SessionUpdateLastAccess", "session": session } );
                return;
            }
            else if ( (response.status===400) || (response.status===401) ) {
                if (data.ErrorMessage !== undefined) {
                    console.error(`The selected project could not be deleted. ${data.ErrorMessage}`);
                    return;
                }
                else {
                    console.error(`The selected project could not be deleted.`);
                    return;
                }
            }
            else if (response.status===503) {
                if (data.ErrorMessage !== undefined) {
                    console.error(`The selected project could not be deleted. ${data.ErrorMessage}`);
                    return;
                } 
                else {
                    console.error(`The selected project could not be deleted.`);
                    return;
                }  
            }
            else {
                console.error(`The selected project could not be deleted.`);
                return;               
            }
    
            
        } catch(error) {
            console.error(`The selected project could not be deleted.`);
            return;
        }
    

    }


    /*===================================================================================================*/

    
    return (
        <div>
            <h1 className="main-page-header-left">MY PROJECTS</h1>
            <Container className="project-list">
            <Row className="project-list-header">
                <Col className="project-name">
                    <Row className="align-items-center row no-gutters">
                        <Col xs="auto" className="file-plus">
                            <FilePlus color="white" size="24" alt="Add Project" onClick={_handleAddProject} />
                        </Col>
                        <Col xs="auto" className="project-plus">Project</Col>
                    </Row>
                </Col>
                <Col className="project-edit">
                    Edit
                </Col>
                <Col className="project-delete">
                    Delete
                </Col>
            </Row>

            {
                projects.map( (project, index) => {

                    return (
                            <Row className="project-item" key={index}>
                                <Col className="project-name">
                                    <Row><span className="pname">Project: {project.project_name}</span></Row>
                                    <Row><span className="pdesc">{project.project_description}</span></Row>
                                </Col>
                                <Col className="project-edit">
                                    <Row>
                                        <Link to={`/myproject/admin/${project._id}`} >
                                            <FileEdit color="#60939A" size="24" alt="Edit Project" />
                                        </Link>
                                    </Row>
                                </Col>
                                <Col className="project-delete">
                                    <Row>

                                        <OverlayTrigger
                                            trigger = "click"
                                            key = {`trigger-${index}`}
                                            placement = 'bottom'
                                            rootClose = {true}
                                            rootCloseEvent= 'click'
                                            overlay = {
                                                <Popover id = {`trigger-${index}`} >
                                                <Popover.Header as="h3">Confirm Delete Project</Popover.Header>
                                                <Popover.Body>
                                                    <Button className="delete-dismiss" 
                                                        onClick={ (event) => {document.body.click() } }
                                                    >Dismiss</Button>
                                                    <Button className="delete-confirm" 
                                                        onClick={ (event) => {_handleDeleteProject(event, project._id)} } 
                                                    >Confirm Delete</Button>
                                                </Popover.Body>
                                                </Popover>
                                            }
                                        >
                                        <FileDelete color="#60939A" size="24" alt="Delete Project" />
                                        </OverlayTrigger>

                                    </Row>
                                </Col>
                            </Row>
                    )
                })
            }
            </Container>


        </div>
    )
}

export default MyProjects;