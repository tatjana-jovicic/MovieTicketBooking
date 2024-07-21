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

  //ako postojiselektovan film, koristi njegov naziv kao kljuc
  const movieKey = selectedMovie ? selectedMovie.name : "";
  //ovaj kljuc se koristi da se pronadje skup zauzetih sjedista za odredjeni film, datum i vrijeme
  const occupiedKey = `${movieKey}_${formattedDate}_${selectedTime}`;
  //zauzeta sjedista na osnovu kljuca iz occupiedSeats
  const occupiedSeatsForSelectedDateTime = occupiedSeats[occupiedKey] || [];

  const handleSeatClick = (seatId) => {
    //provjerava da li je sjediste vec zauzeto
    if (occupiedSeatsForSelectedDateTime.includes(seatId)) {
      return;
    }

    //nova lista za selektovana sjedista
    let newSelectedSeats = [];
    //ako je sjediste vec selektovano
    if (selectedSeats.includes(seatId)) {
      //keira se nova lista selektovanih sjedista koja ne sadrzi to selektovano sjediste
      newSelectedSeats = selectedSeats.filter((seat) => seat !== seatId);
      //da osigura da korisnik ne može da izabere vise sjedista nego sto je dozvoljeno na osnovu quantity
    } else if (selectedSeats.length < quantity) {
      newSelectedSeats = [...selectedSeats, seatId];
    }
    //postavlja novu listu selektovanih sjedišta u stanje
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
