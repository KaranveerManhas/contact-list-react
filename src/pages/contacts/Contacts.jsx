// Import React hooks
import { useEffect, useState } from 'react';
// Import React Bootstrap component
import { Container } from 'react-bootstrap';
// ContactCard component
import ContactCard from '../../components/contactCard/ContactCard';
// Custom css for Contact page
import './contacts.css';
// Import React Redux hooks 
import { useDispatch, useSelector } from 'react-redux';
// Import async thunks from contacts reducer
import { contactSelector, deleteContact, fetchContacts, updateContact } from '../../redux/reducers/contactReducer';

// Spinner component and update contact form component
import { LoaderComponent } from '../../components/loader/LoaderComponent';
import { UpdateContactForm } from '../../components/updateContact/UpdateContact';

// Contact List Page component
const ContactListPage = () => {

  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const {contacts, loading} = useSelector(contactSelector);
  const dispatch = useDispatch();

  // Fetch contacts on page load
  useEffect(() => {

    setTimeout(() => {
      dispatch(fetchContacts());
    }, 2000);
    // eslint-disable-next-line
  }, [])

  // Function to show update contact form
  const handleShowUpdateForm = (contact) => {
    setShowUpdateForm(true);
    setSelectedContact(contact);
  }
  // Function to hide update contact form
  const handleCloseUpdateForm = () => {
    setShowUpdateForm(false);
  }
  // Function to dispatch contact update action
  const handleUpdate = (contact) => {
    dispatch(updateContact(contact));
    setShowUpdateForm(false);
    setSelectedContact(null);
  }

  // Function to dispatch contact delete action
  const handleDelete = (id) => {
    dispatch(deleteContact(id));

  }

  // Loading state check and display spinner if true
  if (loading){
    return <LoaderComponent />
  }

  return (
    <>
    {/* Contact list parent container */}
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
              handleDelete={handleDelete}
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
