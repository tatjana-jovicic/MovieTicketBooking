import { useEffect, useState } from "react";
import "./styles/MovieDetails.css";
import useBookStore from "../../../stores/book/book.store.js";
import ResponsiveDatePickers from "./ResponsiveDatePickers";
import Button from "../../../components/Button/Button.jsx";
import SeatPicker from "./SeatPicker";
import PaymentDialog from "./PaymentDialog";
import MovieDetailsRightTable from "./MovieDetailsRightTable.jsx";
import MovieDetailsRightSeatQuantity from "./MovieDetailsRightSeatQuantity.jsx";

const MovieDetailsRight = () => {
  const { resetState } = useBookStore();
  const [dialogOpen, setDialogOpen] = useState(false);

  //funkcija koja se poziva kada se komponenta demontira, cime se vraca stanje na pocetne vrijednosti
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
      <MovieDetailsRightTable />
      <MovieDetailsRightSeatQuantity />
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
