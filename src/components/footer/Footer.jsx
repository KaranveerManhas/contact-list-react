import { NavLink } from 'react-router-dom';

// Define the FooterComponent functional component
export const FooterComponent = () => (
    // Footer section with dark background and white text, padding, and flex layout
    <footer className="bg-dark text-white p-3 d-flex">
        {/* Copyright text aligned to the start */}
        <p className="me-auto">© 2024 ContactListPro. All rights reserved.</p>
        {/* Footer links aligned to the end */}
        <div className="footer-links text-white ms-auto">
           {/* NavLink for Terms of Service with white text and margin-right */}
           <NavLink to={''} className='text-decoration-none text-white me-2'>Terms of Service</NavLink>
           {/* NavLink for Privacy Policy with white text */}
           <NavLink to={''} className='text-decoration-none text-white'>Privacy Policy</NavLink>
        </div>
    </footer>
);
