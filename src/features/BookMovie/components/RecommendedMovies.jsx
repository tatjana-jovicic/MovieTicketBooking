import "../BookMovie.css";
import { movies } from "../../../data/moviesdata";

const RecommendedMovies = () => {
  const recommendedMovies = movies.filter(
    (movie) => movie.group === "recommended"
  );

  return (
    <>
      <div className="movies">
        {recommendedMovies.map((movie) => (
          <div className="movie_list" key={movie.id}>
            <img src={movie.image} alt={movie.name} />
            <div className="movie_name">
              <h3>{movie.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default RecommendedMovies;
