// import "./BookMovie.css";
// import { Link } from "react-router-dom";
// import Dropdown from "../../assets/dropdown.png";
// import MovieList from "./components/MovieList";
// import useGenreStore from "../../stores/genre/genre.store";
// import Button from "../../components/Button/Button";
// import MovieDetails from "./components/MovieDetails";
// import useSelectMovieStore from "../../stores/select_movie/selectMovie.store";
// const BookMovie = () => {
//   const selectedGenre = useGenreStore((state) => state.selectedGenre);
//   const setSelectedGenre = useGenreStore((state) => state.setSelectedGenre);
//   const selectedMovie = useSelectMovieStore((state) => state.selectedMovie);
//   const setSelectedMovie = useSelectMovieStore(
//     (state) => state.setSelectedMovie
//   );
//   const handleGenreClick = (genre) => {
//     setSelectedGenre(genre);
//     setSelectedMovie(null);
//   };
//   const handleBackToAllMovies = () => {
// setSelectedGenre("");
// setSelectedMovie(null);
//   };
//   return (
//     <div className="book_movie_page">
//       <div className="book_movie_con">
//         <div className="book_movie_con_left">
//           <div className="dropdown">
//             <button>
//               Choose genre
//               <img src={Dropdown} alt="dropdown icon" />
//             </button>
//             <div className="dropdown-content">
//               <Link to="#" onClick={() => handleGenreClick("Romance")}>
//                 Romance
//               </Link>
//               <Link to="#" onClick={() => handleGenreClick("Action")}>
//                 Action
//               </Link>
//               <Link to="#" onClick={() => handleGenreClick("Comedy")}>
//                 Comedy
//               </Link>
//               <Link to="#" onClick={() => handleGenreClick("Horror")}>
//                 Horror
//               </Link>
//               <Link to="#" onClick={() => handleGenreClick("Animation")}>
//                 Animation
//               </Link>
//             </div>
//           </div>
//           <div className="search">
//             <input type="text" placeholder="Search..." />
//           </div>
//         </div>
//         <div className="book_movie_con_right">
//           {selectedMovie ? (
//             <MovieDetails movie={selectedMovie} />
//           ) : selectedGenre ? (
//             <>
//               <Button
//                 buttonText="Back to All Movies"
//                 handleButtonOnClick={handleBackToAllMovies}
//               />
//               <h1>
//                 {selectedGenre.charAt(0).toUpperCase() + selectedGenre.slice(1)}{" "}
//                 Movies
//               </h1>
//               <MovieList
//                 filter="genre"
//                 filterValue={selectedGenre}
//                 onMovieClick={setSelectedMovie}
//               />
//             </>
//           ) : (
//             <>
//               <h1>New Movies</h1>
//               <MovieList
//                 filter="group"
//                 filterValue="new"
//                 onMovieClick={setSelectedMovie}
//               />
//               <h1>Top Rated Movies</h1>
//               <MovieList
//                 filter="rating"
//                 filterValue={5}
//                 onMovieClick={setSelectedMovie}
//               />
//               <h1>Recommended Movies</h1>
//               <MovieList
//                 filter="group"
//                 filterValue="recommended"
//                 onMovieClick={setSelectedMovie}
//               />
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default BookMovie;

//ovo gore je staro stanje bez search logike

import { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../../assets/dropdown.png";
import MovieList from "./components/MovieList";
import useGenreStore from "../../stores/genre/genre.store";
import Button from "../../components/Button/Button";
import MovieDetails from "./components/MovieDetails";
import useSelectMovieStore from "../../stores/select_movie/selectMovie.store";
import { movies } from "../../data/moviesdata";

const BookMovie = () => {
  const selectedGenre = useGenreStore((state) => state.selectedGenre);
  const setSelectedGenre = useGenreStore((state) => state.setSelectedGenre);
  const setSelectedMovie = useSelectMovieStore(
    (state) => state.setSelectedMovie
  );
  const selectedMovie = useSelectMovieStore((state) => state.selectedMovie);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
    setSelectedMovie(null);
    setSearchTerm("");
    setSearchResults([]);
  };

  const handleBackToAllMovies = () => {
    setSelectedGenre("");
    setSelectedMovie(null);
    setSearchTerm("");
    setSearchResults([]);
  };

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    if (term) {
      const filteredMovies = movies.filter(
        (movie) =>
          movie.name.toLowerCase().startsWith(term.toLowerCase()) &&
          (!selectedGenre || movie.genre.includes(selectedGenre))
      );
      setSearchResults(filteredMovies);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="book_movie_page">
      <div className="book_movie_con">
        <div className="book_movie_con_left">
          <div className="dropdown">
            <button>
              Choose genre
              <img src={Dropdown} alt="dropdown icon" />
            </button>
            <div className="dropdown-content">
              <Link to="#" onClick={() => handleGenreClick("Romance")}>
                Romance
              </Link>
              <Link to="#" onClick={() => handleGenreClick("Action")}>
                Action
              </Link>
              <Link to="#" onClick={() => handleGenreClick("Comedy")}>
                Comedy
              </Link>
              <Link to="#" onClick={() => handleGenreClick("Horror")}>
                Horror
              </Link>
              <Link to="#" onClick={() => handleGenreClick("Animation")}>
                Animation
              </Link>
            </div>
          </div>
          {!selectedMovie && (
            <div className="search">
              <input
                type="text"
                placeholder="Search movies..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
          )}
        </div>
        <div className="book_movie_con_right">
          {selectedMovie ? (
            <MovieDetails movie={selectedMovie} />
          ) : selectedGenre ? (
            <>
              <Button
                buttonText="Back to All Movies"
                handleButtonOnClick={handleBackToAllMovies}
              />
              <h1>
                {selectedGenre.charAt(0).toUpperCase() + selectedGenre.slice(1)}{" "}
                Movies
              </h1>
              {searchTerm && searchResults.length > 0 ? (
                <div className="movies">
                  {searchResults.map((movie) => (
                    <div
                      className="movie_list"
                      key={movie.id}
                      onClick={() => setSelectedMovie(movie)}
                      title="Click to view movie details"
                    >
                      <img src={movie.image} alt={movie.name} />
                      <div className="movie_name">
                        <h3>{movie.name}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              ) : searchTerm && searchResults.length === 0 ? (
                <h1>No movies found.</h1>
              ) : (
                <MovieList
                  filter="genre"
                  filterValue={selectedGenre}
                  onMovieClick={setSelectedMovie}
                />
              )}
            </>
          ) : searchTerm && searchResults.length > 0 ? (
            <div className="movies">
              {searchResults.map((movie) => (
                <div
                  className="movie_list"
                  key={movie.id}
                  onClick={() => setSelectedMovie(movie)}
                  title="Click to view movie details"
                >
                  <img src={movie.image} alt={movie.name} />
                  <div className="movie_name">
                    <h3>{movie.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          ) : searchTerm && searchResults.length === 0 ? (
            <h1>No movies found.</h1>
          ) : (
            <>
              <h1>New Movies</h1>
              <MovieList
                filter="group"
                filterValue="new"
                onMovieClick={setSelectedMovie}
              />
              <h1>Top Rated Movies</h1>
              <MovieList
                filter="rating"
                filterValue={5}
                onMovieClick={setSelectedMovie}
              />
              <h1>Recommended Movies</h1>
              <MovieList
                filter="group"
                filterValue="recommended"
                onMovieClick={setSelectedMovie}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookMovie;
