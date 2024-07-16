import "./styles/SeatPicker.css";

const SeatItem = ({ seat, isSelected, isOccupied, onClick }) => {
  const handleClick = () => {
    if (!isOccupied) {
      onClick(seat.id);
    }
  };

  return (
    <div
      className={`seat ${isSelected ? "selected" : ""} ${
        isOccupied ? "occupied" : ""
      }`}
      onClick={handleClick}
    >
      {seat.label}
    </div>
  );
};

export default SeatItem;
