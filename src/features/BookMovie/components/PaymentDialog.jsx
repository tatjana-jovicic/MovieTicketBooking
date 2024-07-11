import useDateStore from "../../../stores/date/date.store";
import useSelectMovieStore from "../../../stores/select_movie/selectMovie.store";
import "./styles/PaymentDialog.css";
import Button from "../../../components/Button/Button";

const PaymentDialog = ({ open, onClose }) => {
  const {
    formattedDate,
    selectedTime,
    selectedMovieHall,
    selectedTimeType,
    selectedSeats,
    total,
    quantity,
  } = useDateStore();
  const selectedMovie = useSelectMovieStore((state) => state.selectedMovie);

  const handleClickOnPay = () => {
    onClose();
  };

  if (!open) return null;

  return (
    <div className="dialog_overlay">
      <div className="dialog">
        <h2>Payment Details</h2>
        <div className="customer_details">
          <div>
            <label>Name:</label>
            <input type="text" placeholder="Name..." />
          </div>
          <div>
            <label>Surname:</label>
            <input type="text" placeholder="Surname..." />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" placeholder="Email..." />
          </div>
        </div>
        <div className="movie_details">
          <div>
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
                  <th>Time: </th>
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
                  <th>Number of Seats:</th>
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
        <div className="payment_method">
          Mark the payment method:
          <label>
            <input type="radio" />
            With Card Now
          </label>
          <label>
            <input type="radio" />
            Cash on delivery
          </label>
        </div>
        <div className="dialog_buttom">
          <Button buttonText="Cancel" handleButtonOnClick={onClose} />
          <Button buttonText="Pay" handleButtonOnClick={handleClickOnPay} />
        </div>
      </div>
    </div>
  );
};

export default PaymentDialog;
