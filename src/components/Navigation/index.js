import { Container, Row, Col, Nav, Navbar } from "react-bootstrap"

export function Navigation(props) {

    return (
        <Container className='main-nav'>
            <Navbar bg="white" variant="light">
                <Container className="justify-content-center">            
                    <Nav className="justify-content-center">
                        <Nav.Link href="/" className={props.navHome}>HOME</Nav.Link>
                        <Nav.Link href="/about" className={props.navAbout}>ABOUT</Nav.Link>
                        <Nav.Link href="/resume" className={props.navResume}>RESUME</Nav.Link>
                        <Nav.Link href="/contact" className={props.navContact}>CONTACT</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </Container>
    )
} 

export default Navigation

