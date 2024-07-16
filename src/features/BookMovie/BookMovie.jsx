import { useState } from "react";
import BookMovieRight from "./components/BookMovieRight";
import useGenreStore from "../../stores/genre/genre.store";
import useSelectMovieStore from "../../stores/select_movie/selectMovie.store";
import BookMovieLeft from "./components/BookMovieLeft";
import { movies } from "../../data/moviesdata";
import "./BookMovie.css";

const BookMovie = () => {
  const selectedMovie = useSelectMovieStore((state) => state.selectedMovie);
  const setSelectedMovie = useSelectMovieStore(
    (state) => state.setSelectedMovie
  );
  const selectedGenre = useGenreStore((state) => state.selectedGenre);
  const setSelectedGenre = useGenreStore((state) => state.setSelectedGenre);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
    setSelectedMovie(null);
    setSearchTerm("");
    setSearchResults([]);
  };

  const handleBackToAllMovies = () => {
    setSelectedGenre("");
    setSelectedMovie(null);
    setSearchTerm("");
    setSearchResults([]);
  };

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    if (term) {
      const filteredMovies = movies.filter(
        (movie) =>
          movie.name.toLowerCase().startsWith(term.toLowerCase()) &&
          (!selectedGenre || movie.genre.includes(selectedGenre))
      );
      setSearchResults(filteredMovies);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="book_movie_page">
      <div className="book_movie_con">
        <BookMovieLeft
          handleGenreClick={handleGenreClick}
          searchTerm={searchTerm}
          handleSearchChange={handleSearchChange}
        />
        <BookMovieRight
          selectedMovie={selectedMovie}
          setSelectedMovie={setSelectedMovie}
          searchTerm={searchTerm}
          searchResults={searchResults}
          handleBackToAllMovies={handleBackToAllMovies}
        />
      </div>
    </div>
  );
};

export default BookMovie;
