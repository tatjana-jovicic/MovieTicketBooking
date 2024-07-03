import "../BookMovie.css";
import { movies } from "../../../data/moviesdata";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

const NewMovies = () => {
  const newMovies = movies.filter((movie) => movie.group === "new");
  // const settings = {
  //   dots: true,
  //   infinite: newMovies.length > 5,
  //   speed: 500,
  //   slidesToShow: newMovies.length >= 5 ? 5 : newMovies.length,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 1180,
  //       settings: {
  //         slidesToShow: newMovies.length >= 4 ? 4 : newMovies.length,
  //         slidesToScroll: 1,
  //         infinite: newMovies.length > 4,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: newMovies.length >= 3 ? 3 : newMovies.length,
  //         slidesToScroll: 1,
  //         infinite: newMovies.length > 3,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: newMovies.length >= 2 ? 2 : newMovies.length,
  //         slidesToScroll: 1,
  //         infinite: newMovies.length > 2,
  //       },
  //     },
  //   ],
  // };

  return (
    <>
      <div className="movies">
        {newMovies.map((movie) => (
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
export default NewMovies;
