import { Link } from "react-router-dom";
import "./Navigation.css";
import PageLogo from "../../components/PageLogo/PageLogo";

const Navigation = () => {
  return (
    <div className="navigation">
      <PageLogo />
      <hr />
      <nav className="nav">
        <div className="nav_links">
          <Link to={{ pathname: "/" }}>Home</Link>
          <Link to={{ pathname: "/book_movie" }}>Book Movie</Link>
          <Link to={{ pathname: "/how_to_book" }}>How To Book</Link>
          <Link to={{ pathname: "/contact" }}>Contact</Link>
        </div>
      </nav>
    </div>
  );
};
export default Navigation;
