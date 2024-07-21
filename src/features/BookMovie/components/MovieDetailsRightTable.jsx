import useBookStore from "../../../stores/book/book.store";
import "./styles/MovieDetails.css";

const MovieDetailsRightTable = () => {
  const {
    formattedDate,
    selectedTime,
    selectedMovieHall,
    selectedTimePrice,
    selectedTimeType,
    total,
  } = useBookStore();

  return (
    <div className="details">
      <table>
        <tbody>
          <tr>
            <th>Selected Date</th>
            <td>{formattedDate}</td>
          </tr>
          <tr>
            <th>Selected Time</th>
            <td>{selectedTime}</td>
          </tr>
          <tr>
            <th>Movie Hall</th>
            <td>{selectedMovieHall}</td>
          </tr>
          <tr>
            <th>Price per ticket</th>
            <td>${selectedTimePrice.toFixed(2)}</td>
          </tr>
          <tr>
            <th>Type</th>
            <td>{selectedTimeType}</td>
          </tr>
          <tr>
            <th>Total</th>
            <td>${total.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MovieDetailsRightTable;
