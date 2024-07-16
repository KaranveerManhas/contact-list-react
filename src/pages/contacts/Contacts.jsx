// pages/ContactListPage.jsx
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ContactCard from '../../components/contactCard/ContactCard';

import './contacts.css';
import { useDispatch, useSelector } from 'react-redux';
import { contactSelector, fetchContacts, updateContact } from '../../redux/reducers/contactReducer';
import { LoaderComponent } from '../../components/loader/LoaderComponent';
import { UpdateContactForm } from '../../components/updateContact/UpdateContact';

const ContactListPage = () => {

  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const {contacts, loading} = useSelector(contactSelector);
  const dispatch = useDispatch();

  useEffect(() => {

    setTimeout(() => {
      dispatch(fetchContacts());
    }, 3000);
    // eslint-disable-next-line
  }, [])


  const handleShowUpdateForm = (contact) => {
    setShowUpdateForm(true);
    setSelectedContact(contact);
  }

  const handleCloseUpdateForm = () => {
    setShowUpdateForm(false);
  }

  const handleUpdate = (contact) => {
    dispatch(updateContact(contact));
    setShowUpdateForm(false);
    setSelectedContact(null);
  }

  if (loading){
    return <LoaderComponent />
  }

  return (
    <>
      <Container className="mt-5 contact-list-page">
        <div className="text-start">
          <h2>Contact List</h2>
        </div>
        <div className='contact-list-container'>
          {contacts.map(contact => (
            <ContactCard
              key={contact.id}
              contact={contact}
              onUpdate={handleShowUpdateForm}
              setShowUpdateForm={setShowUpdateForm}
            />
          ))}
        </div>
      </Container>
      {showUpdateForm && <UpdateContactForm
        showUpdateForm={showUpdateForm}
        onClose={handleCloseUpdateForm}
        selectedContact={selectedContact}
        handleUpdate={handleUpdate}
      />}
    </>
  );
};

export default ContactListPage;
