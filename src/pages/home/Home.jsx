import  Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


export const Home = () => {
    
    const navigate = useNavigate();
    
    const handleNavigateToContactList = () => {
        navigate('/contacts');
    }

    const handleNavigateToAddContacts = () => {
        navigate('/add-contact');
    }

    return (
    <Container className="d-flex flex-column justify-content-center align-items-center h-100">
        <Row className="text-center">
        <Col>
            <h1>Welcome to ContactListPro</h1>
            <p className="lead">The best way to manage and organize your contacts.</p>
            <div className="d-flex justify-content-center mt-3">
            <Button variant="dark" className="me-2" onClick={handleNavigateToContactList}>View Contacts</Button>
            <Button variant="dark" onClick={handleNavigateToAddContacts}>Add Contacts</Button>
            </div>
        </Col>
        </Row>
    </Container>
)};


