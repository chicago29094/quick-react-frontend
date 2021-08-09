import { Image } from 'react-bootstrap';
import { useEffect, useState, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { SessionContext } from '../../App';
import { SessionDispatchContext } from '../../App';
import { LoadingSpinner } from '../LoadingSpinner';
import { storage_log } from '../../utils/storage_log.js'

export const MyProjects = (props) => {

    const session = useContext(SessionContext);
    const dispatch = useContext(SessionDispatchContext);

    const [projectsLoading, setProjectsLoading] = useState(false);
    const [projects, setProjects] = useState([]);

    /*===================================================================================================*/

    useEffect(() => {

        async function _handleLoadProjects() {

            const userProject = {
                _id: "",
                name: "",
                description: "",
                markup: "",
                filepath: "",
                archive: "",
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

    return (
        <div>
            <h1 className="main-page-header-left">MY PROJECTS</h1>
            <Container className="project-list">
            <Row className="project-list-header">
                <Col>
                    <Row>Project</Row>
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