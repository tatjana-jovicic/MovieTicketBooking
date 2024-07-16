import React, { useEffect } from "react";
import "./styles/MovieDetails.css";
import useSelectMovieStore from "../../../stores/select_movie/selectMovie.store";
import useDateStore from "../../../stores/date/date.store.js";
import useGenreStore from "../../../stores/genre/genre.store.js";
import MovieDetailsLeft from "./MovieDetailsLeft";
import MovieDetailsRight from "./MovieDetailsRight";

const MovieDetails = ({ movie }) => {
  const { setSelectedMovie } = useSelectMovieStore();
  const { setSelectedGenre } = useGenreStore();
  const { setAvailableDates } = useDateStore();

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
