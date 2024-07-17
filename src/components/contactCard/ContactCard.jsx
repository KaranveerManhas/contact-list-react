import { Card, Button } from 'react-bootstrap';

// ContactCard component to display contact information
const ContactCard = ({ contact, onUpdate, handleDelete }) => {

  return (
    // Card component for each contact with custom styling
    <Card className="mb-3 rounded-3 bg-body-tertiary">
      <Card.Body className='d-flex justify-content-between'>
        {/* Left section with contact details */}
        <div className='text-start'>
          <h5 className='fw-semibold'>{contact.name}</h5>
          <p className="mb-1">Phone: {contact.phone}</p>
          <p>Email: {contact.email}</p>
        </div>
        {/* Right section with update and delete buttons */}
        <div className="d-flex align-items-center">
          {/* Button to trigger update action */}
          <Button variant="dark" className="me-2 rounded-4" onClick={e => onUpdate(contact)}>
            Update
          </Button>
          {/* Button to trigger delete action */}
          <Button variant="danger" className='rounded-4' onClick={e => handleDelete(contact.id)}>
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ContactCard; // Export the ContactCard component as the default export
