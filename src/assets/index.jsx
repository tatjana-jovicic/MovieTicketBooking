import f_seaBeast from "./movies/f_sea_beast.webp";
import f_findingADory from "./movies/f_finding_dory.jpg";
import f_horrorInForest from "./movies/f_horror_in_forest.jpg";
import f_faultInOurStars from "./movies/f_fault_in_our_stars.webp";
import f_ideaOfYou from "./movies/f_idea_of_you.jpg";
import f_wildRobot from "./movies/f_wild_robot.jpg";
import f_mrMalcolmsList from "./movies/f_mr_malcolms_list.jpg";
import f_ava from "./movies/f_ava.jpg";
import f_annette from "./movies/f_annette.jpg";
import dropdown from "./bookMovie/dropdown.png";
import city from "./location/city.png";
import location from "./location/location.png";
import clock from "./location/clock.png";
import phone from "./contact/phone.png";
import email from "./contact/email.png";
import web from "./contact/web.png";
import pageLogo from "./page-logo.png";
import increment from "./bookMovie/increment.png";
import decrement from "./bookMovie/decrement.jpg";

const Page_Logo = () => {
  return <img className="page_logo_img" src={pageLogo} alt="page logo" />;
};

/* -------------------------------------BOOK MOVIE PAGE--------------- */
const Dropdown = () => {
  return <img className="dropdown_icon" src={dropdown} alt="dropdown icon" />;
};

const Increment = () => {
  return (
    <img className="incr_decr_icon" src={increment} alt="increment logo" />
  );
};

const Decrement = () => {
  return (
    <img className="incr_decr_icon" src={decrement} alt="decrement logo" />
  );
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

/* -------------------------------------HOME PAGE--------------- */

const F_SeaBeast = () => {
  return (
    <img className="home_con_right_img" src={f_seaBeast} alt="cinema slide" />
  );
};

const F_FindingADory = () => {
  return (
    <img
      className="home_con_right_img"
      src={f_findingADory}
      alt="cinema slide"
    />
  );
};

const F_HorrorInForest = () => {
  return (
    <img
      className="home_con_right_img"
      src={f_horrorInForest}
      alt="cinema slide"
    />
  );
};

const F_FaultInOurStars = () => {
  return (
    <img
      className="home_con_right_img"
      src={f_faultInOurStars}
      alt="cinema slide"
    />
  );
};

const F_IdeaOfYou = () => {
  return (
    <img className="home_con_right_img" src={f_ideaOfYou} alt="cinema slide" />
  );
};

const F_Ava = () => {
  return <img className="home_con_right_img" src={f_ava} alt="cinema slide" />;
};

const F_Annette = () => {
  return (
    <img className="home_con_right_img" src={f_annette} alt="cinema slide" />
  );
};
const F_MrMalcolmsList = () => {
  return (
    <img
      className="home_con_right_img"
      src={f_mrMalcolmsList}
      alt="cinema slide"
    />
  );
};

const F_WildRobot = () => {
  return (
    <img className="home_con_right_img" src={f_wildRobot} alt="cinema slide" />
  );
};

export {
  F_SeaBeast,
  F_FindingADory,
  F_HorrorInForest,
  F_FaultInOurStars,
  F_IdeaOfYou,
  F_Ava,
  F_Annette,
  F_MrMalcolmsList,
  F_WildRobot,
  Page_Logo,
  Dropdown,
  Increment,
  Decrement,
  City,
  Location,
  Clock,
  Phone,
  Email,
  Web,
};
