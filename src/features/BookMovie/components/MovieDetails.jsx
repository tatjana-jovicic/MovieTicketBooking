import "./styles/MovieDetails.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useBookStore from "../../../stores/book/book.store.js";
import MovieDetailsLeft from "./MovieDetailsLeft";
import MovieDetailsRight from "./MovieDetailsRight";

const MovieDetails = () => {
  const { movieId } = useParams(); //pribavlja 'movieId' iz URLa
  const { selectedMovie, setSelectedMovie, movies, setAvailableDates } =
    useBookStore();

  useEffect(() => {
    const fetchMovie = () => {
      if (movieId) {
        const movie = movies.find((movie) => movie.id === parseInt(movieId));
        if (movie) {
          setSelectedMovie(movie);
          setAvailableDates(movie.availableDates || []);
        }
      } else {
        setAvailableDates([]); //brise dostupne datume ako 'movieId' nije prisutan
      }
    };

    fetchMovie();

    return () => setAvailableDates([]); //cisti dostupne datume prilikom uklanjanja komponente
  }, [movieId, movies, setSelectedMovie, setAvailableDates]);

  //prikazuje 'Loading...' dok se film ucitava
  if (!selectedMovie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie_detail">
      <div className="detail_con">
        <MovieDetailsLeft />
        <MovieDetailsRight />
      </div>
    </div>
  );
};

export default MovieDetails;
