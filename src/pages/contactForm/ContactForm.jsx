// components/AddContactForm.jsx
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

import './contactForm.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/reducers/contactReducer';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(addContact(formData));
    navigate('/contacts');

  };

  return (
    <Container className="d-flex justify-content-center align-items-center h-100">
      <Row className="w-100">
        <Col md={7} lg={5} className="mx-auto p-5 shadow rounded-5 contact-form-container">
          <h2 className="text-center mb-4">Add New Contact</h2>
          <Form onSubmit={handleSubmit} className='text-start'>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter name"
                className='rounded-4'
                required
              />
            </Form.Group>

            <Form.Group controlId="formPhone" className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className='rounded-4'
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                className='rounded-4'
                required
              />
            </Form.Group>
            <div className="text-center">
                <Button variant="dark" type="submit" className="form-btn me-4 rounded-4">
                Add Contact
                </Button>
                <Button variant="danger" type="reset" className="form-btn rounded-4" onClick={e=>navigate('/contacts')}>
                Cancel
                </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
