import { useEffect } from "react";
import "./styles/MovieDetails.css";
import useSelectMovieStore from "../../../stores/select_movie/selectMovie.store";
import useDateStore from "../../../stores/date/date.store.js";
import MovieRating from "./MovieRating";
import ResponsiveDatePickers from "./ResponsiveDatePickers";
import Button from "../../../components/Button/Button.jsx";

const MovieDetails = ({ movie }) => {
  const selectedMovie = useSelectMovieStore((state) => state.selectedMovie);
  const { setAvailableDates, selectedMovieHall } = useDateStore();

  const displayMovie = movie || selectedMovie;
  const availableDates = movie.availableDates || [];

  useEffect(() => {
    setAvailableDates(availableDates);
  }, [availableDates, setAvailableDates]);

  return (
    <div className="movie_detail">
      <div className="detail_con">
        <div className="detail_con_left">
          <div className="con_left_detail">
            <h2>{displayMovie.name}</h2>
            <MovieRating rating={displayMovie.rating} />
            <p>
              2024 | {displayMovie.time} | {displayMovie.genre}
            </p>
            <p>{displayMovie.description}</p>
            <p>Starring: {displayMovie.starring}</p>
          </div>
          <div className="con_left_img">
            <img src={displayMovie.image} alt={displayMovie.name} />
          </div>
          <div className="con_left_video">
            <iframe
              width="600"
              height="350"
              src={displayMovie.video}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="detail_con_right">
          <div className="date_picker">
            <ResponsiveDatePickers />
          </div>
          <div className="movie_hall">
            <p>Movie Hall: {selectedMovieHall}</p>
            <p>Per ticket: ${displayMovie.price}</p>
          </div>
          <div className="num_seat">Number of Seats: </div>
          <div className="con_right_details">
            <input type="text" placeholder="Name..." />
            <input type="text" placeholder="Email..." />
          </div>
          <div className="pay_button">
            <Button buttonText="Proceed to Pay" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
