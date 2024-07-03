import "./BookMovie.css";
import Dropdown from "../../assets/dropdown.png";
import NewMovies from "./components/NewMovies";
import TopRatedMovies from "./components/TopRatedMovies";
import RecommendedMovies from "./components/RecommendedMovies";

const BookMovie = () => {
  return (
    <div className="book_movie_page">
      <div className="book_movie_con">
        <div class="book_movie_con_left">
          <div class="dropdown">
            <button>
              Genre
              <img src={Dropdown} alt="dropdown icon" />
            </button>
            <div class="dropdown-content">
              <a href="#">Romantic</a>
              <a href="#">Action</a>
              <a href="#">Comedy</a>
              <a href="#">Horror</a>
              <a href="#">Animation</a>
            </div>
          </div>
          <div className="search">
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="book_movie_con_right">
          <h1>New</h1>
          <NewMovies />
          <h1>Top Rated</h1>
          <TopRatedMovies />
          <h1>Recommended</h1>
          <RecommendedMovies />
        </div>
      </div>
    </div>
  );
};
export default BookMovie;
