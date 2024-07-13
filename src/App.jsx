import './App.css';

// React Router
import { BrowserRouter as Router, Route, Routes } from'react-router-dom';

// Components
import {Home} from './pages/home/Home';
import { LayoutComponent } from './components/layout/Layout';
import Contacts from './pages/contacts/Contacts';
import ContactForm from './pages/contactForm/ContactForm';

function App() {

  return (
    <Router>
      <div className="App">
        <LayoutComponent>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/add-contact' element={<ContactForm />} />
          </Routes>
        </LayoutComponent>
      </div>
    </Router>
  );
}

export default App;
