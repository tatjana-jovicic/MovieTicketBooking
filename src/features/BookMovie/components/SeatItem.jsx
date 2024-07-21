import "./styles/SeatPicker.css";

const SeatItem = ({ seat, isSelected, isOccupied, onClick }) => {
  //funkcija koja se poziva kada se klikne na sjediste
  //ako sjediste nije zauzeto (isOccupied je false), poziva onClick funkciju sa id-jem sjedista (seat.id)
  const handleClick = () => {
    if (!isOccupied) {
      onClick(seat.id);
    }
  };

  //promjenljiva ce uvijek sadrzati seat, a dodatno ce imati selected ako je sjediste selektovano i occupied ako je sedište zauzeto
  //ako sjediste nije selektovano, bice samo seat, a ako nije zauzeto, bice samo seat ili seat occupied
  const className = `seat ${isSelected ? "selected" : ""} ${
    isOccupied ? "occupied" : ""
  }`;

  return (
    <div className={className} onClick={handleClick}>
      {seat.label}
    </div>
  );
};

export default SeatItem;
