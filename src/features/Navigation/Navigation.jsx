import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";
import PageLogo from "../../components/PageLogo/PageLogo";

const Navigation = () => {
  const location = useLocation();

  return (
    <div className="navigation">
      <PageLogo />
      <hr />
      <nav className="nav">
        <div className="nav_links">
          <Link
            to="/"
            className={location.pathname === "/" ? "active-link" : ""}
          >
            Home
          </Link>
          <Link
            to="/book_movie"
            className={location.pathname === "/book_movie" ? "active-link" : ""}
          >
            Book Movie
          </Link>
          <Link
            to="/how_to_book"
            className={
              location.pathname === "/how_to_book" ? "active-link" : ""
            }
          >
            How To Book
          </Link>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active-link" : ""}
          >
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
};
export default Navigation;
