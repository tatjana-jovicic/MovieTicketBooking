import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";
import PageLogo from "../../components/PageLogo/PageLogo";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="navigation">
      <PageLogo />
      <hr />
      <button className="menu-icon" onClick={toggleMenu}>
        &#9776;
      </button>
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <div className="nav_links">
          <Link
            to="/"
            className={location.pathname === "/" ? "active-link" : ""}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/book_movie"
            className={location.pathname === "/book_movie" ? "active-link" : ""}
            onClick={closeMenu}
          >
            Book Movie
          </Link>
          <Link
            to="/how_to_book"
            className={
              location.pathname === "/how_to_book" ? "active-link" : ""
            }
            onClick={closeMenu}
          >
            How To Book
          </Link>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active-link" : ""}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
};
export default Navigation;
