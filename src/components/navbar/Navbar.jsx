// React Bootstrap components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// Navbar Custom CSS
import './navbar.css';

// Navbar Component
export const NavbarComponent = () => {

    return (
        <>
        <Navbar expand='lg' className='bg-dark'>
            <Container>
                <Navbar.Brand href="#home" className='fw-bold'>
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
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Contacts</Nav.Link>
                        <Nav.Link href="#">Add Contacts</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )

}