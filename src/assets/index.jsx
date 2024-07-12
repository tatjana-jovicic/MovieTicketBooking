// import dropdown from "./dropdown.png";
import city from "./city.png";
import location from "./location.png";
import clock from "./clock.png";
import phone from "./phone.png";
import email from "./email.png";
import web from "./web.png";
import cart from "./cart.webp";

/* -------------------------------------BOOK MOVIE PAGE--------------- */
// const Dropdown = () => {
//   return <img className="dropdown-icon" src={dropdown} alt="dropdown icon" />;
// };

const Cart = () => {
  return <img className="booking_page_left_logo" src={cart} alt="cart icon" />;
};

/* -------------------------------------LOACATION PAGE--------------- */
const City = () => {
  return <img className="location_page_left_logo" src={city} alt="city icon" />;
};

const Location = () => {
  return (
    <img
      className="location_page_left_logo"
      src={location}
      alt="location icon"
    />
  );
};

const Clock = () => {
  return (
    <img className="location_page_left_logo" src={clock} alt="clock icon" />
  );
};

/* -------------------------------------CONTACT PAGE--------------- */
const Phone = () => {
  return (
    <img className="contact_page_left_logo" src={phone} alt="phone icon" />
  );
};

const Email = () => {
  return (
    <img className="contact_page_left_logo" src={email} alt="email icon" />
  );
};

const Web = () => {
  return <img className="contact_page_left_logo" src={web} alt="web icon" />;
};

export { Cart, City, Location, Clock, Phone, Email, Web };
