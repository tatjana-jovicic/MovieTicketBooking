import "./styles/MovieDetails.css";
import MovieRating from "./MovieRating";
import useBookStore from "../../../stores/book/book.store";

const MovieDetailsLeft = () => {
  const { selectedMovie } = useBookStore();

  return (
    <div className="detail_con_left">
      <div className="movie">
        <div className="name_and_img">
          <div className="con_left_detail">
            <h2>{selectedMovie.name}</h2>
            <MovieRating rating={selectedMovie.rating} />
            <p>
              2024 | {selectedMovie.time} | {selectedMovie.genre}
            </p>
            <p>{selectedMovie.description}</p>
          </div>
          <div>
            <img src={selectedMovie.image} alt={selectedMovie.name} />
          </div>
        </div>
        <div className="video">
          <iframe
            width="600"
            height="350"
            src={selectedMovie.video}
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
