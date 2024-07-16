import { Modal, Button, Form } from 'react-bootstrap';


export const UpdateContactForm = ({ selectedContact, showUpdateForm, handleUpdate, onClose }) => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const contact = {
            id: selectedContact.id,
            name: e.target[0].value,
            email: e.target[1].value,
            phone: e.target[2].value
        }
        handleUpdate(contact);
    }

  return (
      <Modal
        show={showUpdateForm}
        onHide={onClose}
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
                  defaultValue={selectedContact.name}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  defaultValue={selectedContact.email}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={selectedContact.phone}
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
