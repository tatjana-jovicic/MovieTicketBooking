import "./styles/MovieDetails.css";
import useSelectMovieStore from "../../../stores/select_movie/selectMovie.store";
import MovieRating from "./MovieRating";

const MovieDetails = ({ movie }) => {
  const selectedMovie = useSelectMovieStore((state) => state.selectedMovie);

  if (!movie && !selectedMovie) {
    return <div>Loading...</div>;
  }

  //koristimo proslijedjeni 'movie' ako postoji, inace koristimo 'selectedMovie'
  const displayMovie = movie || selectedMovie;

  return (
    <div className="movie_detail">
      <div className="detail_con">
        <div className="detail_con_left">
          <div className="con_left_detail">
            <h2>{displayMovie.name}</h2>
            <p>
              {" "}
              <MovieRating rating={displayMovie.rating} />
            </p>
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
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="detail_con_right"></div>
      </div>
    </div>
  );
};

export default MovieDetails;
