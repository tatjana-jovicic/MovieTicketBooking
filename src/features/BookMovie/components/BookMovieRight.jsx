import "../BookMovie.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieList from "./MovieList";
import useBookStore from "../../../stores/book/book.store";
import { movies } from "../../../data/moviesdata";

const BookMovieRight = ({ searchResults }) => {
  // dobija parametar 'genre' iz URLa pomocu useParams hooka
  const { genre } = useParams();
  const { selectedGenre, setSelectedGenre } = useBookStore();

  //postavlja izabrani zanr kad se promijeni URL parametar 'genre'
  useEffect(() => {
    if (genre) {
      setSelectedGenre(genre);
    }
  }, [genre, setSelectedGenre]);

  //funkcija za renderovanje svih filmova
  const renderAllMovies = () => (
    <>
      <h1>All Movies</h1>
      <MovieList
        movies={
          searchResults && searchResults.length > 0 ? searchResults : movies
        } //prikazuje rezultate searcha ako ih ima, inace prikazuje sve filmove
      />
    </>
  );

  // funkcija za renderovanje filmova po zanru
  const renderMoviesByGenre = () => (
    <>
      <h1>
        {selectedGenre.charAt(0).toUpperCase() + selectedGenre.slice(1)} Movies
      </h1>
      <MovieList
        movies={movies.filter((movie) => movie.genre === selectedGenre)}
      />
    </>
  );

  //renderuje div koji prikazuje ili filmove po zanru ili sve filmove, u zavisnosti od toga da li je izabran zanr
  return (
    <div className="book_movie_con_right">
      {selectedGenre ? renderMoviesByGenre() : renderAllMovies()}
    </div>
  );
};

export default BookMovieRight;
