import { Image } from 'react-bootstrap';
import { useEffect, useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import { SessionContext } from '../../App';
import { SessionDispatchContext } from '../../App';
import { LoadingSpinner } from '../LoadingSpinner';
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
        storage_log('Inside _handleLoadProjects1', Date.now());
        storage_log('Inside _handleLoadProjects1', session, session.last_access);

        async function _handleLoadProjects() {
 
            storage_log('Inside _handleLoadProjects2', Date.now());
 
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
            const API_URI = `${process.env.REACT_APP_QR_API_ENDPOINT}/project/`;

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

        const API_URI=`${process.env.REACT_APP_QR_API_ENDPOINT}/project/`;
    
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
            storage_log('Add New Project', response.status);
            storage_log('Add New Project', data);
            
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

    const _handleDeleteProject = async (event) => {

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
                    console.log(project);
                    console.log(session);
                    return (
                            <Row className="project-item" key={index}>
                                <Col className="project-name">
                                    <Row><span className="pname">Project: {project.project_name}</span></Row>
                                    <Row><span className="pdesc">{project.project_description}</span></Row>
                                </Col>
                                <Col className="project-edit">
                                    <Row>
                                        <FileEdit color="#60939A" size="24" alt="Add Project" onClick={_handleAddProject} />
                                    </Row>
                                </Col>
                                <Col className="project-delete">
                                    <Row>
                                        <FileDelete color="#60939A" size="24" alt="Add Project" onClick={_handleAddProject} />
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