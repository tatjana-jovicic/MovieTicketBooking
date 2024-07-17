import { useEffect, useState } from "react";
import "./styles/MovieDetails.css";
import useBookStore from "../../../stores/book/book.store.js";
import ResponsiveDatePickers from "./ResponsiveDatePickers";
import Button from "../../../components/Button/Button.jsx";
import SeatPicker from "./SeatPicker";
import PaymentDialog from "./PaymentDialog";

const MovieDetailsRight = () => {
  const {
    formattedDate,
    selectedTime,
    selectedMovieHall,
    selectedTimeType,
    selectedTimePrice,
    quantity,
    setQuantity,
    total,
    resetState,
  } = useBookStore();
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    return () => {
      resetState();
    };
  }, [resetState]);

  const handleProceedToPay = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div className="detail_con_right">
      <div className="date_picker">
        <ResponsiveDatePickers />
      </div>
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
      <div className="num_seats">
        Number of Seats:
        <div className="quantity">
          <span
            className="decrement"
            onClick={() => setQuantity(Math.max(0, quantity - 1))}
          >
            -
          </span>
          <span>{quantity}</span>
          <span className="increment" onClick={() => setQuantity(quantity + 1)}>
            +
          </span>
        </div>
      </div>
      <div className="info_seats">
        <p>
          <span className="empty"></span> Empty
        </p>
        <p>
          <span className="selected"></span> Selected
        </p>
        <p>
          <span className="occupied"></span> Occupied
        </p>
      </div>
      <div>
        <SeatPicker />
      </div>
      <div className="pay_button">
        <Button
          buttonText="Proceed to Pay"
          handleButtonOnClick={handleProceedToPay}
        />
      </div>
      <PaymentDialog open={dialogOpen} onClose={handleCloseDialog} />
    </div>
  );
};
export default MovieDetailsRight;
