import "../BookMovie.css";
import { useNavigate } from "react-router-dom";
import { movies as allMovies } from "../../../data/moviesdata"; //filmovie iz lokalnog fajla dodjeljuje promenljivoj 'allMovies'
import MovieRating from "./MovieRating";
import useBookStore from "../../../stores/book/book.store";

const MovieList = ({ movies }) => {
  const { setSelectedMovie, selectedGenre } = useBookStore();
  const navigate = useNavigate();

  //filtrira filmove prema zanru ako je izabran zanr, ili prikazuje sve filmove ako nije
  const displayedMovies =
    movies ||
    allMovies.filter(
      (movie) => !selectedGenre || movie.genre.includes(selectedGenre)
    );

  //funkcija koja se poziva kada se klikne na film
  const handleMovieClick = (movie) => {
    setSelectedMovie(movie); //setuje izabrani film u store
    navigate(`/book_movie/details/${movie.id}`); //navigira na stranicu sa detaljima izabranog filma
  };

  return (
    <div className="movies">
      {displayedMovies.map((movie) => (
        <div
          className="movie_list"
          key={movie.id}
          onClick={() => handleMovieClick(movie)}
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
