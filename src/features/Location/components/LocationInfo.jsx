import "../Location.css";
import { City, Location, Clock } from "../../../assets/index";

const LocationInfo = () => {
  const location = [
    {
      logo: <City />,
      title: "City",
      description: "London",
    },
    {
      logo: <Location />,
      title: "Address",
      description: "307 Regent St., London W1B 2HW, United Kingdom",
    },
    {
      logo: <Clock />,
      title: "Work time",
      description: "monday - sunday, 03 PM - 03 AM",
    },
  ];

  return (
    <div className="location_page_left_list_con">
      {location.map((location) => (
        <div className="location_page_left_list" key={location.title}>
          {location.logo}
          <div className="location_page_left_list_text">
            <h3>{location.title}</h3>
            <p>{location.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default LocationInfo;
