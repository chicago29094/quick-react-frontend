import { Container, Row, Col, Nav, Navbar } from "react-bootstrap"

export const Navigation = (props) => {

    return (
        <Container className='main-nav'>
            <Navbar bg="white" variant="light">
                <Container className="justify-content-center">            
                    <Nav className="justify-content-center">
                        <Nav.Link href="/" className={props.navHome}>HOME</Nav.Link>
                        <Nav.Link href="/about" className={props.navAbout}>ABOUT</Nav.Link>
                        <Nav.Link href="/documentation" className={props.navResume}>DOCUMENTATION</Nav.Link>
                        <Nav.Link href="/register" className={props.navContact}>REGISTER</Nav.Link>
                        <Nav.Link href="/login" className={props.navContact}>LOG IN</Nav.Link>
                        <Nav.Link href="/logout" className={props.navContact}>LOG OUT</Nav.Link>
                        <Nav.Link href="/myprojects" className={props.navContact}>MY PROJECTS</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </Container>
    )
} 

export default Navigation

