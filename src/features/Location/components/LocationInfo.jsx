import "../Location.css";
import { City, Location, Clock } from "../../../assets/index";

const LocationInfo = () => {
  const location = [
    {
      logo: <City />,
      title: "City",
      description: "Chicago",
    },
    {
      logo: <Location />,
      title: "Address",
      description: "80 Chicago Rd5, Chicago, USA",
    },
    {
      logo: <Clock />,
      title: "Work time",
      description: "monday - sunday, 2:00 PM - 3:00 AM",
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
