import "../BookMovie.css";
import { movies } from "../../../data/moviesdata";

const TopRatedMovies = () => {
  const topRatedMovies = movies.filter((movie) => movie.rating === 5);

  return (
    <>
      <div className="movies">
        {topRatedMovies.map((movie) => (
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
export default TopRatedMovies;
