// import React, { useEffect } from "react";
// import "./styles/MovieDetails.css";
// import useSelectMovieStore from "../../../stores/select_movie/selectMovie.store";
// import useDateStore from "../../../stores/date/date.store.js";
// import MovieRating from "./MovieRating";
// import ResponsiveDatePickers from "./ResponsiveDatePickers";
// import Button from "../../../components/Button/Button";
// import SeatPicker from "./SeatPicker";
// import PaymentDialog from "./PaymentDialog";
// import useGenreStore from "../../../stores/genre/genre.store.js";

// const MovieDetails = ({ movie }) => {
//   const { setSelectedMovie } = useSelectMovieStore();
//   const { setSelectedGenre } = useGenreStore();
//   const {
//     formattedDate,
//     selectedTime,
//     setAvailableDates,
//     selectedMovieHall,
//     selectedTimeType,
//     selectedTimePrice,
//     quantity,
//     setQuantity,
//     total,
//     resetState,
//   } = useDateStore();
//   const [dialogOpen, setDialogOpen] = React.useState(false);

//   const displayMovie = movie;

//   useEffect(() => {
//     setAvailableDates(displayMovie.availableDates || []);
//   }, [displayMovie, setAvailableDates]);

//   useEffect(() => {
//     // Reset state on movie change
//     resetState();
//   }, [displayMovie, resetState]);

//   const handleProceedToPay = () => {
//     setDialogOpen(true);
//   };

//   const handleCloseDialog = () => {
//     setDialogOpen(false);
//   };

//   const handleBackToAllMovies = () => {
//     setSelectedGenre("");
//     setSelectedMovie(null);
//   };

//   return (
//     <div className="movie_detail">
//       <div className="detail_con">
//         <div className="detail_con_left">
//           <Button
//             buttonText="Back to All Movies"
//             handleButtonOnClick={handleBackToAllMovies}
//           />
//           <div className="movie">
//             <div className="con_left_detail">
//               <h2>{displayMovie.name}</h2>
//               <MovieRating rating={displayMovie.rating} />
//               <p>
//                 2024 | {displayMovie.time} | {displayMovie.genre}
//               </p>
//               <p>{displayMovie.description}</p>
//             </div>
//             <div>
//               <img src={displayMovie.image} alt={displayMovie.name} />
//             </div>
//             <div>
//               <iframe
//                 width="600"
//                 height="350"
//                 src={displayMovie.video}
//                 title="YouTube video player"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </div>
//         </div>
//         <div className="detail_con_right">
//           <div className="date_picker">
//             <ResponsiveDatePickers />
//           </div>
//           <div className="details">
//             <table>
//               <tbody>
//                 <tr>
//                   <th>Selected Date</th>
//                   <td>{formattedDate}</td>
//                 </tr>
//                 <tr>
//                   <th>Selected Time</th>
//                   <td>{selectedTime}</td>
//                 </tr>
//                 <tr>
//                   <th>Movie Hall</th>
//                   <td>{selectedMovieHall}</td>
//                 </tr>
//                 <tr>
//                   <th>Price per ticket</th>
//                   <td>${selectedTimePrice.toFixed(2)}</td>
//                 </tr>
//                 <tr>
//                   <th>Type</th>
//                   <td>{selectedTimeType}</td>
//                 </tr>
//                 <tr>
//                   <th>Total</th>
//                   <td>${total.toFixed(2)}</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//           <div className="num_seats">
//             Number of Seats:
//             <div className="quantity">
//               <span
//                 className="decrement"
//                 onClick={() => setQuantity(Math.max(0, quantity - 1))}
//               >
//                 -
//               </span>
//               <span>{quantity}</span>
//               <span
//                 className="increment"
//                 onClick={() => setQuantity(quantity + 1)}
//               >
//                 +
//               </span>
//             </div>
//           </div>
//           <div className="info_seats">
//             <p>
//               <span className="empty"></span> Empty
//             </p>
//             <p>
//               <span className="selected"></span> Selected
//             </p>
//             <p>
//               <span className="occupied"></span> Occupied
//             </p>
//           </div>
//           <div>
//             <SeatPicker />
//           </div>
//           <div className="pay_button">
//             <Button
//               buttonText="Proceed to Pay"
//               handleButtonOnClick={handleProceedToPay}
//             />
//           </div>
//         </div>
//       </div>
//       <PaymentDialog open={dialogOpen} onClose={handleCloseDialog} />
//     </div>
//   );
// };

// export default MovieDetails;

//rastavljena komponenta

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
