// Import the NavbarComponent and FooterComponent
import { NavbarComponent } from "../navbar/Navbar";
import { FooterComponent } from "../footer/Footer";

// Define the LayoutComponent functional component
export const LayoutComponent = ({ children }) => {
    return (
        <>
            {/* Render the NavbarComponent */}
            <NavbarComponent />
            {/* Main body content wrapper */}
            <div className="body-content bg-body-tertiary">
                {children} {/* Render child components */}
            </div>
            {/* Render the FooterComponent */}
            <FooterComponent />
        </>
    );
};
