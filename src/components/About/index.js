import {Image} from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';

export const About = (props) => {

    return (
        <Container>
            <Row>
           <h1 className="main-page-header-left">ABOUT</h1>

           <p>Quick-React is an open-source project I developed in August, 2021.  After working on many React projects during the summer of 2021, and experimenting with many of the new features of React, and React Bootstrap, it became apparent there was a great deal of manual work that was being performed repeatedly and manually to get to a project to the point where as a developer, I could concentrate on the unique requirements of the specific project.</p>
    
            <p>Since I had previously developed intelligent macros and <strong>Emmet-style</strong> capabilities within other editors for other Web-development environments, I wanted to try my hand at developing a useful tool for React projects and with a capability of integrating with the VS Code editor.  I created the initial release version of Quick-React over the course of two weeks in August of 2021.</p> 

            <p>Quick-React is an open-source project.  Suggestions and requests to contribute are welcome.  Please see the following resource links:</p>

            <p><strong>GitHub Repository - Quick-React Back-End API:</strong><br />
            <a href="https://github.com/chicago29094/quick-react" target="_blank" rel="noreferrer">https://github.com/chicago29094/quick-react</a>
            </p>

            <p><strong>GitHub Repository - Quick-React Front-End:</strong><br />
            <a href="https://github.com/chicago29094/quick-react-frontend" target="_blank" rel="noreferrer">https://github.com/chicago29094/quick-react-frontend</a></p>

            <p><strong>GitHub Repository - Quick-React VS Code Extension:</strong><br />  
            <a href="https://github.com/chicago29094/quick-react-code" target="_blank" rel="noreferrer">https://github.com/chicago29094/quick-react-code</a></p>

            <p><strong>Deployed public Website:</strong><br />
            <a href="https://quick-react-tool.netlify.app/" target="_blank" rel="noreferrer">https://quick-react-tool.netlify.app/</a></p>

            <p><strong>Project E-mail Link:</strong> quickreact@uswide.net</p>

            </Row>
        </Container>
    )
} 

export default About;