import "./styles/MovieDetails.css";
import MovieRating from "./MovieRating";
import Button from "../../../components/Button/Button.jsx";

const MovieDetailsLeft = ({ displayMovie, handleBackToAllMovies }) => {
  return (
    <div className="detail_con_left">
      <Button
        buttonText="Back to All Movies"
        handleButtonOnClick={handleBackToAllMovies}
      />
      <div className="movie">
        <div className="name_and_img">
          <div className="con_left_detail">
            <h2>{displayMovie.name}</h2>
            <MovieRating rating={displayMovie.rating} />
            <p>
              2024 | {displayMovie.time} | {displayMovie.genre}
            </p>
            <p>{displayMovie.description}</p>
          </div>
          <div>
            <img src={displayMovie.image} alt={displayMovie.name} />
          </div>
        </div>
        <div className="video">
          <iframe
            width="600"
            height="350"
            src={displayMovie.video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default MovieDetailsLeft;
