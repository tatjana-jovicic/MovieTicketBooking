import { useState } from "react";
import "./styles/SeatPicker.css";

const SeatPicker = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const seatMap = [
    [
      { id: "A1", label: "A1" },
      { id: "A2", label: "A2" },
      null,
      { id: "A3", label: "A3" },
      { id: "A4", label: "A4" },
      { id: "A5", label: "A5" },
      { id: "A6", label: "A6" },
      null,
      { id: "A7", label: "A7" },
      { id: "A8", label: "A8" },
    ],

    [
      { id: "B1", label: "B1" },
      { id: "B2", label: "B2" },
      null,
      { id: "B3", label: "B3" },
      { id: "B4", label: "B4" },
      { id: "B5", label: "B5" },
      { id: "B6", label: "B6" },
      null,
      { id: "B7", label: "B7" },
      { id: "B8", label: "B8" },
    ],
    [
      { id: "C1", label: "C1" },
      { id: "C2", label: "C2" },
      null,
      { id: "C3", label: "C3" },
      { id: "C4", label: "C4" },
      { id: "C5", label: "C5" },
      { id: "C6", label: "C6" },
      null,
      { id: "C7", label: "C7" },
      { id: "C8", label: "C8" },
    ],
    [
      { id: "D1", label: "D1" },
      { id: "D2", label: "D2" },
      null,
      { id: "D3", label: "D3" },
      { id: "D4", label: "D4" },
      { id: "D5", label: "D5" },
      { id: "D6", label: "D6" },
      null,
      { id: "D7", label: "D7" },
      { id: "D8", label: "D8" },
    ],

    [
      { id: "E1", label: "E1" },
      { id: "E2", label: "E2" },
      null,
      { id: "E3", label: "E3" },
      { id: "E4", label: "E4" },
      { id: "E5", label: "E5" },
      { id: "E6", label: "E6" },
      null,
      { id: "E7", label: "E7" },
      { id: "E8", label: "E8" },
    ],
  ];

  const handleSeatClick = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  return (
    <div className="seat-picker">
      <h3>Choose Your Seats:</h3>
      <div className="seat-map">
        {seatMap.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`} className="seat-row">
            {row.map((seat, index) =>
              seat ? (
                <div
                  key={seat.id}
                  className={`seat ${
                    selectedSeats.includes(seat.id) ? "selected" : ""
                  }`}
                  onClick={() => handleSeatClick(seat.id)}
                >
                  {seat.label}
                </div>
              ) : (
                <div key={`empty-${index}`} className="empty-seat"></div>
              )
            )}
          </div>
        ))}
      </div>
      <div className="selected-seats">
        <p>Selected Seats: {selectedSeats.join(", ")}</p>
      </div>
    </div>
  );
};

export default SeatPicker;
