// import { useState } from "react";
// import useDateStore from "../../../stores/date/date.store";
// import useSelectMovieStore from "../../../stores/select_movie/selectMovie.store";
// import "./styles/PaymentDialog.css";
// import Button from "../../../components/Button/Button";

// const PaymentDialog = ({ open, onClose }) => {
//   const {
//     formattedDate,
//     selectedTime,
//     selectedMovieHall,
//     selectedTimeType,
//     selectedSeats,
//     total,
//     quantity,
//     purchaseTickets,
//     setSelectedSeats,
//   } = useDateStore();
//   const selectedMovie = useSelectMovieStore((state) => state.selectedMovie);

//   const [name, setName] = useState("");
//   const [surname, setSurname] = useState("");
//   const [email, setEmail] = useState("");
//   const [paymentMethod, setPaymentMethod] = useState("");

//   const handleNameChange = (e) => setName(e.target.value);
//   const handleSurnameChange = (e) => setSurname(e.target.value);
//   const handleEmailChange = (e) => setEmail(e.target.value);
//   const handlePaymentMethodChange = (method) => setPaymentMethod(method);

//   const handleToPay = () => {
//     if (
//       !name ||
//       !surname ||
//       !email ||
//       !paymentMethod ||
//       !formattedDate ||
//       !selectedTime
//     ) {
//       alert(
//         "Please fill in all reservation details and select a payment method."
//       );
//       return;
//     }

//     if (quantity !== selectedSeats.length) {
//       alert(
//         `The quantity of tickets ${quantity} does not match the number of selected seats ${selectedSeats.length}.`
//       );
//       return;
//     }

//     purchaseTickets(
//       selectedMovie.name,
//       formattedDate,
//       selectedTime,
//       selectedSeats
//     );

//     setSelectedSeats([]);

//     onClose();
//   };

//   if (!open) return null;

//   return (
//     <div className="dialog_overlay">
//       <div className="dialog">
//         <h2>Payment Details</h2>
//         <div className="customer_details">
//           <div>
//             <label>Name:</label>
//             <input
//               type="text"
//               placeholder="Name..."
//               value={name}
//               onChange={handleNameChange}
//             />
//           </div>
//           <div>
//             <label>Surname:</label>
//             <input
//               type="text"
//               placeholder="Surname..."
//               value={surname}
//               onChange={handleSurnameChange}
//             />
//           </div>
//           <div>
//             <label>Email:</label>
//             <input
//               type="email"
//               placeholder="Email..."
//               value={email}
//               onChange={handleEmailChange}
//             />
//           </div>
//         </div>
//         <div className="movie_details">
//           <div>
//             <img src={selectedMovie.image} alt={selectedMovie.name} />
//           </div>
//           <div className="movie_info">
//             <table>
//               <tbody>
//                 <tr>
//                   <th>Name Movie:</th>
//                   <td>{selectedMovie.name}</td>
//                 </tr>
//                 <tr>
//                   <th>Time: </th>
//                   <td>{selectedMovie.time}</td>
//                 </tr>
//                 <tr>
//                   <th>Genre:</th>
//                   <td>{selectedMovie.genre}</td>
//                 </tr>
//                 <tr>
//                   <th>Date:</th>
//                   <td>{formattedDate}</td>
//                 </tr>
//                 <tr>
//                   <th>Time:</th>
//                   <td>{selectedTime}</td>
//                 </tr>
//                 <tr>
//                   <th>Type:</th>
//                   <td>{selectedTimeType}</td>
//                 </tr>
//                 <tr>
//                   <th>Movie Hall:</th>
//                   <td>{selectedMovieHall}</td>
//                 </tr>
//                 <tr>
//                   <th>Number of Tickets:</th>
//                   <td>{quantity}</td>
//                 </tr>
//                 <tr>
//                   <th>Selected Seats:</th>
//                   <td>{selectedSeats.join(", ")}</td>
//                 </tr>
//                 <tr>
//                   <th>Total:</th>
//                   <td>${total.toFixed(2)}</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//         <div className="payment_method">
//           Mark the payment method:
//           <label>
//             <input
//               type="radio"
//               checked={paymentMethod === "card"}
//               onChange={() => handlePaymentMethodChange("card")}
//             />
//             With Card Now
//           </label>
//           <label>
//             <input
//               type="radio"
//               checked={paymentMethod === "cash"}
//               onChange={() => handlePaymentMethodChange("cash")}
//             />
//             Cash on delivery
//           </label>
//         </div>
//         <div className="dialog_buttom">
//           <Button buttonText="Cancel" handleButtonOnClick={onClose} />
//           <Button buttonText="Pay" handleButtonOnClick={handleToPay} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PaymentDialog;

//ovo je rastavlejna komponenta

import { useState } from "react";
import useDateStore from "../../../stores/date/date.store";
import useSelectMovieStore from "../../../stores/select_movie/selectMovie.store";
import "./styles/PaymentDialog.css";
import PaymentDDialogButtons from "./PaymentDDialogButtons";
import PaymentDPaymentMethod from "./PaymentDPaymentMethod";
import PaymentDMovieDetails from "./PaymentDMovieDetails";
import PaymentDCustomerDetails from "./PaymentDCustomerDetails";

const PaymentDialog = ({ open, onClose }) => {
  const {
    formattedDate,
    selectedTime,
    selectedMovieHall,
    selectedTimeType,
    selectedSeats,
    total,
    quantity,
    purchaseTickets,
    setSelectedSeats,
  } = useDateStore();
  const selectedMovie = useSelectMovieStore((state) => state.selectedMovie);

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
          selectedTimeType={selectedTimeType}
          selectedMovieHall={selectedMovieHall}
          quantity={quantity}
          selectedSeats={selectedSeats}
          total={total}
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
