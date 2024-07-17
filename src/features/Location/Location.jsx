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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23789.813145979948!2d-87.89037336523438!3d41.81264880000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e49f1835b7515%3A0x807c7b1cb7c3fff5!2sClassic%20Cinemas%20La%20Grange%20Theatre!5e0!3m2!1ssr!2sba!4v1721249124179!5m2!1ssr!2sba"
            width="500"
            height="400"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default Location;
