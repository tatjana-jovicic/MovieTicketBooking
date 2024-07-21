import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import BookMovieRight from "./components/BookMovieRight";
import useBookStore from "../../stores/book/book.store";
import BookMovieLeft from "./components/BookMovieLeft";
import { movies } from "../../data/moviesdata";
import "./BookMovie.css";

const BookMovie = () => {
  const { setSelectedMovie, setSelectedGenre } = useBookStore();
  //lokalno stanje za search i rezultate
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  //za pristup trenutnoj ruti u aplikaciji
  const location = useLocation();

  //useEffect se izvrsava svaki put kad se putanja promijeni
  useEffect(() => {
    //ako je trenutna putanja "/book_movie", resetuj odabrani zanr i film
    if (location.pathname === "/book_movie") {
      setSelectedGenre(null);
      setSelectedMovie(null); //ako obrisem obrise se i search
    }
  }, [location.pathname, setSelectedGenre, setSelectedMovie]);

  //funkcija koja se poziva kad se promijeni unos u search
  const handleSearchChange = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    setSearchResults(
      term
        ? movies.filter((movie) => movie.name.toLowerCase().startsWith(term)) //filtrira filmove po nazivu koji pocinje unosom
        : [] //ako nema unosa, resetuje rezultate searcha
    );
  };

  return (
    <div className="book_movie_page">
      <div className="book_movie_con">
        {/* komponenta za search i filtriranje filmova */}
        <BookMovieLeft
          searchTerm={searchTerm}
          handleSearchChange={handleSearchChange}
        />
        {/*komponenta za prikaz liste filmova */}
        <BookMovieRight searchResults={searchResults} />
      </div>
    </div>
  );
};

export default BookMovie;
