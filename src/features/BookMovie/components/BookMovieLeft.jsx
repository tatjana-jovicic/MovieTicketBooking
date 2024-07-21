import { Link } from "react-router-dom";
import { Dropdown } from "../../../assets/index";
import "../BookMovie.css";
import useBookStore from "../../../stores/book/book.store";

const BookMovieLeft = ({ searchTerm, handleSearchChange }) => {
  const { selectedMovie, selectedGenre } = useBookStore();

  return (
    <div className="book_movie_con_left">
      <div className="dropdown">
        <button>
          Choose genre
          <Dropdown />
        </button>
        <div className="dropdown_content">
          <Link to="/book_movie/Romance">Romance</Link>
          <Link to="/book_movie/Action">Action</Link>
          <Link to="/book_movie/Comedy">Comedy</Link>
          <Link to="/book_movie/Horror">Horror</Link>
          <Link to="/book_movie/Animation">Animation</Link>
        </div>
      </div>
      {/* prikazuje search samo ako nisu izabrani ni film ni zanr */}
      {!selectedMovie && !selectedGenre && (
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
