import './App.css'; // Import the main CSS file for the app

// Import React Router components for routing
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import the components and pages used in the app
import { Home } from './pages/home/Home';
import { LayoutComponent } from './components/layout/Layout';
import Contacts from './pages/contacts/Contacts';
import ContactForm from './pages/contactForm/ContactForm';
import NotFound from './pages/not_found/NotFound';

function App() {

  return (
    // Wrap the entire app with the Router component to enable routing
    <Router>
      <div className="App">
        {/* Use the LayoutComponent to provide a consistent layout for all pages */}
        <LayoutComponent>
          {/* Define the Routes for the app */}
          <Routes>
            {/* Define a route for the home page */}
            <Route path='/' element={<Home />} />
            {/* Define a route for the contacts page */}
            <Route path='/contacts' element={<Contacts />} />
            {/* Define a route for the add contact form page */}
            <Route path='/add-contact' element={<ContactForm />} />
            {/* Define a route for the 404 not found page */}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </LayoutComponent>
      </div>
    </Router>
  );
}

export default App; // Export the App component as the default export
