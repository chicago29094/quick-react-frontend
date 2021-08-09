import { Image } from 'react-bootstrap';
import { useEffect, useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import { SessionContext } from '../../App';
import { SessionDispatchContext } from '../../App';
import { LoadingSpinner } from '../LoadingSpinner';
import { storage_log } from '../../utils/storage_log.js'
import { PlusCircleFill as FilePlus} from 'react-bootstrap-icons';


export const MyProjects = (props) => {

    const session = useContext(SessionContext);
    const dispatch = useContext(SessionDispatchContext);

    const [projectsLoading, setProjectsLoading] = useState(false);
    const [projects, setProjects] = useState([]);
    const [addNewProject, setAddNewProject] = useState(0);
    const [deleteProject, setDeleteProject] = useState(0);

    const history = useHistory();

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
    , [session]);


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
                setAddNewProject(Date.now());
            }
            else if ( (response.status===400) || (response.status===401) ) {
                if (data.ErrorMessage !== undefined) {
                    console.error(`A new project could not be added. ${data.ErrorMessage}`);
                    setAddNewProject(Date.now());
                }
                else {
                    console.error(`A new project could not be added.`);
                    setAddNewProject(Date.now());
                }
            }
            else if (response.status===503) {
                if (data.ErrorMessage !== undefined) {
                    console.error(`A new project could not be added. ${data.ErrorMessage}`);
                    setAddNewProject(Date.now());
                } 
                else {
                    setAddNewProject(Date.now());
                }  
            }
            else {
                console.error(`A new project could not be added.`);
                setAddNewProject(Date.now());
            }
    
            
        } catch(error) {
            console.error(`A new project could not be added.`);
            setAddNewProject(Date.now());
        }
    
      } 

    /*===================================================================================================*/

    const _handleDeleteProject = async (event) => {

    }

    /*===================================================================================================*/
    // Upon a successful addition of a project or deletion of a project, let's try to rerender the view
    useEffect(() => {
            storage_log('in useEffect#2: ', addNewProject, deleteProject);
            setTimeout(() => {
                history.push('/myprojects');
            }, 1000);
        }, [addNewProject, deleteProject]);

    /*===================================================================================================*/

    return (
        <div>
            <h1 className="main-page-header-left">MY PROJECTS</h1>
            <Container className="project-list">
            <Row className="project-list-header">
                <Col>
                    <Row className="align-items-center row no-gutters">
                        <Col xs="auto" className="file-plus">
                            <FilePlus color="white" size="24" alt="Add Project" onClick={_handleAddProject} />
                        </Col>
                        <Col xs="auto" className="project-plus">Project</Col>
                    </Row>
                </Col>
                <Col>
                    <Row>Edit</Row>
                </Col>
                <Col>
                    <Row>Delete</Row>
                </Col>
            </Row>

            {
                projects.map( (project) => {
                    console.log(project);
                    return (
                            <Row className="project-item">
                                <Col className="project-name">
                                    <Row><span className="pname">Project: {project.project_name}</span></Row>
                                    <Row><span className="pdesc">{project.project_description}</span></Row>
                                </Col>
                                <Col className="project-edit">
                                    <Row>Project ID: {project._id}</Row>
                                </Col>
                                <Col className="project-delete">
                                    <Row>Project ID: {project._id}</Row>
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