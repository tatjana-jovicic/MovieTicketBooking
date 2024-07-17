import { Link } from "react-router-dom";
import { Dropdown } from "../../../assets/index";
import "../BookMovie.css";
import useBookStore from "../../../stores/book/book.store";

const BookMovieLeft = ({
  handleGenreClick,
  searchTerm,
  handleSearchChange,
}) => {
  const { selectedMovie } = useBookStore();

  return (
    <div className="book_movie_con_left">
      <div className="dropdown">
        <button>
          Choose genre
          <Dropdown />
        </button>
        <div className="dropdown-content">
          <Link to="#" onClick={() => handleGenreClick("Romance")}>
            Romance
          </Link>
          <Link to="#" onClick={() => handleGenreClick("Action")}>
            Action
          </Link>
          <Link to="#" onClick={() => handleGenreClick("Comedy")}>
            Comedy
          </Link>
          <Link to="#" onClick={() => handleGenreClick("Horror")}>
            Horror
          </Link>
          <Link to="#" onClick={() => handleGenreClick("Animation")}>
            Animation
          </Link>
        </div>
      </div>
      {!selectedMovie && (
        <div className="search">
          <input
            type="text"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      )}
    </div>
  );
};

export default BookMovieLeft;
