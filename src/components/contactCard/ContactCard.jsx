import { Card, Button } from 'react-bootstrap';

const ContactCard = ({ contact, onUpdate }) => {



  return (
    <Card className="mb-3 rounded-3 bg-body-tertiary">
      <Card.Body className='d-flex justify-content-between'>
      <div className='text-start'>
          <h5 className='fw-semibold'>{contact.name}</h5>
          <p className="mb-1">Phone: {contact.phone}</p>
          <p>Email: {contact.email}</p>
        </div>
        <div className="d-flex align-items-center">
          <Button variant="dark" className="me-2 rounded-4" onClick={e=>onUpdate(contact)} >
            Update
          </Button>
          <Button variant="danger" className='rounded-4' >
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ContactCard;
