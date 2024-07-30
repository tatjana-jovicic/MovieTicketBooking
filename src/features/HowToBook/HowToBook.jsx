import "./HowToBook.css";
import HowToBookInfo from "./components/HowToBookInfo";

const HowToBook = () => {
  return (
    <div className="how_book_page">
      <div className="how_book_con">
        <div className="how_book_con_left">
          <h2>Follow these steps to book your ticket!</h2>
        </div>
        <div className="how_book_con_right">
          <HowToBookInfo />
        </div>
      </div>
    </div>
  );
};
export default HowToBook;
