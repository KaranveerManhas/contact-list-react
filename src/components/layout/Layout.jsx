
import { NavbarComponent } from "../navbar/Navbar";
import { FooterComponent } from "../footer/Footer";

export const LayoutComponent = ({ children }) => {
    return (
        <>
            <NavbarComponent />
            <div className="body-content bg-body-tertiary">
                {children}
            </div>
            <FooterComponent />
        </>
    )
}