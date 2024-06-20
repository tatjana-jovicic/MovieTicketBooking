import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./features/Navigation/Navigation";
import Home from "./features/Home/Home";
import BookMovie from "./features/BookMovie/BookMovie";
import HowToBook from "./features/HowToBook/HowToBook";
import Contact from "./features/Contact/Contact";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book_movie" element={<BookMovie />} />
          <Route path="/how_to_book" element={<HowToBook />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
