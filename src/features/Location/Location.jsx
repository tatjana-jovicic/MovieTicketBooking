import "./Location.css";
import LocationInfo from "./components/LocationInfo";

const Location = () => {
  return (
    <div className="location_page">
      <div className="location_con">
        <div className="location_con_left">
          <h2>Location Information</h2>
          <hr />
          <LocationInfo />
        </div>
        <div className="location_con_right">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4965.605138865683!2d-0.142873!3d51.516838!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad51b1e1cf9%3A0x6b6c101845a42b42!2sRegent%20Street%20Cinema!5e0!3m2!1ssr!2sba!4v1719584212547!5m2!1ssr!2sba"
            width="500"
            height="400"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default Location;
