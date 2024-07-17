// Import necessary components from React Bootstrap
import { Modal, Button, Form } from 'react-bootstrap';

// Define the UpdateContactForm component
export const UpdateContactForm = ({ selectedContact, showUpdateForm, handleUpdate, onClose }) => {

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Create a contact object with the updated values
        const contact = {
            id: selectedContact.id,
            name: e.target[0].value,
            email: e.target[1].value,
            phone: e.target[2].value
        }
        // Call the handleUpdate function passed via props
        handleUpdate(contact);
    }

    return (
        // Render a modal for updating contact information
        <Modal
            show={showUpdateForm} // Show or hide the modal based on showUpdateForm prop
            onHide={onClose} // Call the onClose function when the modal is closed
            centered
            backdrop='static'
        >
            <Modal.Header closeButton>
                <Modal.Title>Update Contact</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            defaultValue={selectedContact.name} // Set the default value to the current contact name
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            defaultValue={selectedContact.email} // Set the default value to the current contact email
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formPhone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                            type="text"
                            defaultValue={selectedContact.phone} // Set the default value to the current contact phone
                            required
                        />
                    </Form.Group>
                    <Button variant="dark" type="submit" className='mt-3'>
                        Save Changes
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};
