import { useState, useCallback } from "react";
import useBookStore from "../../../stores/book/book.store";
import "./styles/PaymentDialog.css";
import PaymentDDialogButtons from "./PaymentDDialogButtons";
import PaymentDPaymentMethod from "./PaymentDPaymentMethod";
import PaymentDMovieDetails from "./PaymentDMovieDetails";
import PaymentDCustomerDetails from "./PaymentDCustomerDetails";
import useNotificationStore from "../../../stores/notification/notification.store";

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

  const setNotification = useNotificationStore(
    (state) => state.setNotification
  );

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handleSurnameChange = (e) => setSurname(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePaymentMethodChange = (method) => setPaymentMethod(method);

  //funkcija koja se poziva kada korisnik potvrdi placanje
  //provjerava da li su svi podaci unijeti i da li je kolicina karata u skladu sa brojem selektovanih sjedista
  //ako je sve u redu, poziva purchaseTickets i resetuje selektovana sjedista
  const handleToPay = useCallback(() => {
    if (
      !name ||
      !surname ||
      !email ||
      !paymentMethod ||
      !formattedDate ||
      !selectedTime
    ) {
      setNotification(true, "Missing data!", "warning");
      return;
    }

    if (quantity !== selectedSeats.length) {
      setNotification(
        true,
        "Match the quantity with the number of selected seats!",
        "warning"
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
    setNotification(true, "Successfully reserved!", "success");
  }, [
    name,
    surname,
    email,
    paymentMethod,
    formattedDate,
    selectedTime,
    quantity,
    selectedSeats,
    purchaseTickets,
    selectedMovie,
    setSelectedSeats,
    onClose,
  ]);

  //ako dijalog nije otvoren ne prikazuje se nista
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
        <PaymentDMovieDetails />
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
