// pages/ContactListPage.jsx
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import ContactCard from '../../components/contactCard/ContactCard';

import './contacts.css';

const ContactListPage = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'John Doe', phone: '123-456-7890', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', phone: '987-654-3210', email: 'jane@example.com' },
    { id: 2, name: 'Jane Smith', phone: '987-654-3210', email: 'jane@example.com' },
    { id: 2, name: 'Jane Smith', phone: '987-654-3210', email: 'jane@example.com' },
    { id: 2, name: 'Jane Smith', phone: '987-654-3210', email: 'jane@example.com' },
    // { id: 2, name: 'Jane Smith', phone: '987-654-3210', email: 'jane@example.com' }
    // Add more contacts here
  ]);

  const handleUpdate = (id) => {
    console.log('Update contact with id:', id);
    // Add update logic here
  };

  const handleDelete = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <Container className="mt-5 contact-list-page">
      <div className="text-start">
        <h2>Contact List</h2>
      </div>
      <div className='contact-list-container'>
        {contacts.map(contact => (
          <ContactCard
            key={contact.id}
            contact={contact}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </Container>
  );
};

export default ContactListPage;
