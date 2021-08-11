import {Image} from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';

export const Footer = (props) => {

    return (
        <div className="footer-content">
            <Container>
               <p class="copyright">&copy; 2021, Harry Anastopoulos, All Rights Reserved</p>
            </Container>
        </div>
    )
} 

export default Footer;