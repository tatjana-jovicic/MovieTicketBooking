import Button from "../../../components/Button/Button";
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";
import "../BookMovie.css";
import useBookStore from "../../../stores/book/book.store";

const BookMovieRight = ({
  selectedMovie,
  setSelectedMovie,
  searchTerm,
  searchResults,
  handleBackToAllMovies,
}) => {
  const { selectedGenre } = useBookStore();

  return (
    <div className="book_movie_con_right">
      {selectedMovie ? (
        <MovieDetails movie={selectedMovie} />
      ) : selectedGenre ? (
        <>
          <Button
            buttonText="Back to All Movies"
            handleButtonOnClick={handleBackToAllMovies}
          />
          <h1>
            {selectedGenre.charAt(0).toUpperCase() + selectedGenre.slice(1)}{" "}
            Movies
          </h1>
          {searchTerm && searchResults.length > 0 ? (
            <MovieList movies={searchResults} onMovieClick={setSelectedMovie} />
          ) : searchTerm && searchResults.length === 0 ? (
            <h1>No movies found.</h1>
          ) : (
            <MovieList
              filter="genre"
              filterValue={selectedGenre}
              onMovieClick={setSelectedMovie}
            />
          )}
        </>
      ) : searchTerm && searchResults.length > 0 ? (
        <MovieList movies={searchResults} onMovieClick={setSelectedMovie} />
      ) : searchTerm && searchResults.length === 0 ? (
        <h1>No movies found.</h1>
      ) : (
        <>
          <h1>New Movies</h1>
          <MovieList
            filter="group"
            filterValue="new"
            onMovieClick={setSelectedMovie}
          />
          <h1>Top Rated Movies</h1>
          <MovieList
            filter="rating"
            filterValue={5}
            onMovieClick={setSelectedMovie}
          />
          <h1>Recommended Movies</h1>
          <MovieList
            filter="group"
            filterValue="recommended"
            onMovieClick={setSelectedMovie}
          />
        </>
      )}
    </div>
  );
};

export default BookMovieRight;
