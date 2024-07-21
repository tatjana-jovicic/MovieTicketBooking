import useBookStore from "../../../stores/book/book.store";
import "./styles/MovieDetails.css";

const MovieDetailsRightSeatQuantity = () => {
  const { quantity, incrementQuantity, decrementQuantity } = useBookStore();

  return (
    <div className="num_seats">
      Number of Seats:
      <div className="quantity">
        <span className="decrement" onClick={decrementQuantity}>
          -
        </span>
        <span>{quantity}</span>
        <span className="increment" onClick={incrementQuantity}>
          +
        </span>
      </div>
    </div>
  );
};

export default MovieDetailsRightSeatQuantity;
