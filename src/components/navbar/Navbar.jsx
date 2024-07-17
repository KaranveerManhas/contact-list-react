// Import necessary React Bootstrap components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// Import useNavigate hook from React Router for navigation
import { useNavigate } from 'react-router-dom';

// Define the NavbarComponent
export const NavbarComponent = () => {

    // Initialize the navigate function
    const navigate = useNavigate();

    // Handle navigation based on the text of the clicked nav link
    const handleNavigate = (e) => {
        e.preventDefault();
        // Navigate to the respective page based on the link text
        if (e.target.innerText === "Home" || e.target.innerText === "ContactListPro") {
            navigate('/');
        } else if (e.target.innerText === "Contacts") {
            navigate('/contacts');
        } else {
            navigate('/add-contact');
        }
    }

    return (
        <>
            {/* Render the Navbar component */}
            <Navbar expand='lg' className='bg-dark navbar-dark'>
                <Container>
                    {/* Navbar brand/logo */}
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
                    {/* Toggle button for collapsed navbar */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    {/* Collapsible navbar content */}
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {/* Navigation links */}
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
