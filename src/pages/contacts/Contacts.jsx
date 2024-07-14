// pages/ContactListPage.jsx
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import ContactCard from '../../components/contactCard/ContactCard';

import './contacts.css';
import { useDispatch, useSelector } from 'react-redux';
import { contactSelector, fetchContacts } from '../../redux/reducers/contactReducer';

const ContactListPage = () => {

  const {contacts} = useSelector(contactSelector);
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(fetchContacts());

  }, [dispatch])



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
            // onUpdate={handleUpdate}
            // onDelete={handleDelete}
          />
        ))}
      </div>
    </Container>
  );
};

export default ContactListPage;
