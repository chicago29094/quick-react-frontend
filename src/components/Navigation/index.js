import { Container, Row, Col, Nav, Navbar } from "react-bootstrap"

export const Navigation = (props) => {

    return (
            <Navbar bg="dark" variant="dark" sticky="top">
                <Container className="justify-content-center">            
                    <Nav className="justify-content-center flex-wrap">
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
    )
} 

export default Navigation

