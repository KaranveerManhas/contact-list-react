
import { NavLink } from 'react-router-dom';



export const FooterComponent = () => (
    <footer className="bg-dark text-white p-3 d-flex">
        <p className="me-auto">© 2024 ContactListPro. All rights reserved.</p>
        <div className="footer-links text-white ms-auto">
           <NavLink to={''} className='text-decoration-none text-white me-2'>Terms of Service</NavLink>
           <NavLink to={''} className='text-decoration-none text-white'>Privacy Policy</NavLink>
        </div>
    </footer>
);