import { Container, Row, Col } from 'react-bootstrap';
import { Navigation } from '../../components/Navigation'

export const TopHeader = () => {

    return (
        <div className="top-header">
            <h1>quick-react</h1>
            <h2>Sub Head</h2>
            <Navigation />
        </div>
    )
} 

export default TopHeader;

