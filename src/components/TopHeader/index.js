import { Container, Row, Col, Image, Navbar } from 'react-bootstrap';
import { Navigation } from '../../components/Navigation'
import QRLogo from '../../images/quick_react_v3_trans.png'
import SpeedImage from '../../images/sprint3.jpg'

export const TopHeader = () => {

    return (
        
        <div>
            <Navigation />
            <Container className="top-header">
                <Row>
                    <Col xs={12} md={5}  className="top-border-left">
                        <Image src={QRLogo} fluid className="qr-logo"/>
                        <p></p>
                    </Col>
                    <Col xs={12} md={7} className="top-border-right">
                        <Image src={SpeedImage} fluid className="qr-image"/>
                        <p></p>
                    </Col>                  
                </Row>
            </Container>
        </div>
    )
} 

export default TopHeader;

