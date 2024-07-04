import "../BookMovie.css";
import { movies } from "../../../data/moviesdata";
import useSelectMovieStore from "../../../stores/select_movie/selectMovie.store";
import MovieRating from "./MovieRating";

const MovieList = ({ filter, filterValue, onMovieClick }) => {
  const setSelectedMovie = useSelectMovieStore(
    (state) => state.setSelectedMovie
  );

  const filteredMovies = movies.filter(
    (movie) => movie[filter] === filterValue
  );

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    onMovieClick(movie);
  };

  return (
    <div className="movies">
      {filteredMovies.map((movie) => (
        <div
          className="movie_list"
          key={movie.id}
          onClick={() => handleMovieClick(movie)}
          title="Click for book movie"
        >
          <img src={movie.image} alt={movie.name} />
          <MovieRating rating={movie.rating} />
          <div className="movie_name">
            <h3>{movie.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
