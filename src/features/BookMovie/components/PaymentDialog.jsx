import { useState } from "react";
import useBookStore from "../../../stores/book/book.store";
import "./styles/PaymentDialog.css";
import PaymentDDialogButtons from "./PaymentDDialogButtons";
import PaymentDPaymentMethod from "./PaymentDPaymentMethod";
import PaymentDMovieDetails from "./PaymentDMovieDetails";
import PaymentDCustomerDetails from "./PaymentDCustomerDetails";

const PaymentDialog = ({ open, onClose }) => {
  const {
    formattedDate,
    selectedTime,
    selectedSeats,
    quantity,
    purchaseTickets,
    setSelectedSeats,
    selectedMovie,
  } = useBookStore();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handleSurnameChange = (e) => setSurname(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePaymentMethodChange = (method) => setPaymentMethod(method);

  const handleToPay = () => {
    if (
      !name ||
      !surname ||
      !email ||
      !paymentMethod ||
      !formattedDate ||
      !selectedTime
    ) {
      alert(
        "Please fill in all reservation details and select a payment method."
      );
      return;
    }

    if (quantity !== selectedSeats.length) {
      alert(
        `The quantity of tickets ${quantity} does not match the number of selected seats ${selectedSeats.length}.`
      );
      return;
    }

    purchaseTickets(
      selectedMovie.name,
      formattedDate,
      selectedTime,
      selectedSeats
    );
    setSelectedSeats([]);
    onClose();
  };

  if (!open) return null;

  return (
    <div className="dialog_overlay">
      <div className="dialog">
        <h2>Payment Details</h2>
        <PaymentDCustomerDetails
          name={name}
          surname={surname}
          email={email}
          handleNameChange={handleNameChange}
          handleSurnameChange={handleSurnameChange}
          handleEmailChange={handleEmailChange}
        />
        <PaymentDMovieDetails
          selectedMovie={selectedMovie}
          formattedDate={formattedDate}
          selectedTime={selectedTime}
          quantity={quantity}
          selectedSeats={selectedSeats}
        />
        <PaymentDPaymentMethod
          paymentMethod={paymentMethod}
          handlePaymentMethodChange={handlePaymentMethodChange}
        />
        <PaymentDDialogButtons onClose={onClose} handleToPay={handleToPay} />
      </div>
    </div>
  );
};

export default PaymentDialog;
