import { useEffect } from "react";
import "./styles/MovieDetails.css";
import useBookStore from "../../../stores/book/book.store.js";
import MovieDetailsLeft from "./MovieDetailsLeft";
import MovieDetailsRight from "./MovieDetailsRight";

const MovieDetails = ({ movie }) => {
  const { setAvailableDates, setSelectedGenre, setSelectedMovie } =
    useBookStore();

  const displayMovie = movie;

  useEffect(() => {
    setAvailableDates(displayMovie.availableDates || []);
  }, [displayMovie, setAvailableDates]);

  const handleBackToAllMovies = () => {
    setSelectedGenre("");
    setSelectedMovie(null);
  };

  return (
    <div className="movie_detail">
      <div className="detail_con">
        <MovieDetailsLeft
          displayMovie={displayMovie}
          handleBackToAllMovies={handleBackToAllMovies}
        />
        <MovieDetailsRight />
      </div>
    </div>
  );
};

export default MovieDetails;
