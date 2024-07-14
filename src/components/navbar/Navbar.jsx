// React Bootstrap components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

// Navbar Component
export const NavbarComponent = () => {

    const navigate = useNavigate();

    const handleNavigate = (e) => {
        e.preventDefault();
        // TODO: Navigate to specific page
        if(e.target.innerText === "Home" || e.target.innerText === "ContactListPro"){
            navigate('/');
        }
        else if (e.target.innerText === "Contacts"){
            navigate('/contacts');
        }
        else {
            navigate('/add-contact');
        }
    }

    return (
        <>
        <Navbar expand='lg' className='bg-dark navbar-dark'>
            <Container>
                <Navbar.Brand href="#" className='fw-bold' onClick={handleNavigate}>
                    <img 
                    src="/images/contact.png" 
                    alt="ContactList Icon"
                    width='30'
                    height='30'
                    className='me-2'
                     />
                    ContactListPro
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="" onClick={handleNavigate}>Home</Nav.Link>
                        <Nav.Link href="" onClick={handleNavigate}>Contacts</Nav.Link>
                        <Nav.Link href="" onClick={handleNavigate}>Add Contacts</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )

}