import useBookStore from "../../../stores/book/book.store";
import "./styles/PaymentDialog.css";

const PaymentDMovieDetails = ({
  selectedMovie,
  formattedDate,
  selectedTime,
  quantity,
  selectedSeats,
}) => {
  const { selectedMovieHall, selectedTimeType, total } = useBookStore();

  return (
    <div className="movie_details">
      <div className="movie_img">
        <img src={selectedMovie.image} alt={selectedMovie.name} />
      </div>
      <div className="movie_info">
        <table>
          <tbody>
            <tr>
              <th>Name Movie:</th>
              <td>{selectedMovie.name}</td>
            </tr>
            <tr>
              <th>Time:</th>
              <td>{selectedMovie.time}</td>
            </tr>
            <tr>
              <th>Genre:</th>
              <td>{selectedMovie.genre}</td>
            </tr>
            <tr>
              <th>Date:</th>
              <td>{formattedDate}</td>
            </tr>
            <tr>
              <th>Time:</th>
              <td>{selectedTime}</td>
            </tr>
            <tr>
              <th>Type:</th>
              <td>{selectedTimeType}</td>
            </tr>
            <tr>
              <th>Movie Hall:</th>
              <td>{selectedMovieHall}</td>
            </tr>
            <tr>
              <th>Number of Tickets:</th>
              <td>{quantity}</td>
            </tr>
            <tr>
              <th>Selected Seats:</th>
              <td>{selectedSeats.join(", ")}</td>
            </tr>
            <tr>
              <th>Total:</th>
              <td>${total.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentDMovieDetails;
