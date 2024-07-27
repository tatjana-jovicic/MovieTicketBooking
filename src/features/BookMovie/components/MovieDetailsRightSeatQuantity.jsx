import useBookStore from "../../../stores/book/book.store";
import "./styles/MovieDetails.css";
import { Increment, Decrement } from "../../../assets/index";

const MovieDetailsRightSeatQuantity = () => {
  const { quantity, incrementQuantity, decrementQuantity } = useBookStore();

  return (
    <div className="num_seats">
      Number of Seats:
      <div className="quantity">
        <span onClick={decrementQuantity}>
          <Decrement />
        </span>
        <span>{quantity}</span>
        <span onClick={incrementQuantity}>
          <Increment />
        </span>
      </div>
    </div>
  );
};

export default MovieDetailsRightSeatQuantity;
