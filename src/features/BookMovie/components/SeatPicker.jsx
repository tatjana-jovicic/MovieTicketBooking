import useBookStore from "../../../stores/book/book.store.js";
import "./styles/SeatPicker.css";
import SeatItem from "./SeatItem";
import { seatMap } from "../../../data/seatmap.js";

const SeatPicker = () => {
  const {
    selectedSeats,
    setSelectedSeats,
    quantity,
    occupiedSeats,
    formattedDate,
    selectedTime,
    selectedMovie,
  } = useBookStore();

  const movieKey = selectedMovie ? selectedMovie.name : "";
  const occupiedKey = `${movieKey}_${formattedDate}_${selectedTime}`;
  const occupiedSeatsForSelectedDateTime = occupiedSeats[occupiedKey] || [];

  const handleSeatClick = (seatId) => {
    if (occupiedSeatsForSelectedDateTime.includes(seatId)) {
      return;
    }

    let newSelectedSeats = [];
    if (selectedSeats.includes(seatId)) {
      newSelectedSeats = selectedSeats.filter((seat) => seat !== seatId);
    } else if (selectedSeats.length < quantity) {
      newSelectedSeats = [...selectedSeats, seatId];
    }
    setSelectedSeats(newSelectedSeats);
  };

  return (
    <div className="seat_picker">
      <h3>Choose Your Seats:</h3>
      <div className="seat_map">
        {seatMap.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`} className="seat_row">
            {row.map((seat, index) =>
              seat ? (
                <SeatItem
                  key={seat.id}
                  seat={seat}
                  isSelected={selectedSeats.includes(seat.id)}
                  isOccupied={occupiedSeatsForSelectedDateTime.includes(
                    seat.id
                  )}
                  onClick={handleSeatClick}
                />
              ) : (
                <div key={`empty-${index}`} className="empty_seat"></div>
              )
            )}
          </div>
        ))}
      </div>
      <div className="selected_seats">
        <p>
          Selected Seats: <span>{selectedSeats.join(", ")}</span>
        </p>
      </div>
    </div>
  );
};

export default SeatPicker;
