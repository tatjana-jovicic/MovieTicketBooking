import "./Home.css";
import Cinema1 from "../../assets/cinema1.jpg";
import Cinema2 from "../../assets/cinema2.webp";
import Cinema3 from "../../assets/cinema3.jpg";

const Home = () => {
  return (
    <div className="home_page">
      <div className="home_page_con">
        <div className="home_con_left">
          <h1>Welcome!</h1>
          <h2>
            "You're just a step away from enjoyment – book your ticket on time!"
          </h2>
        </div>
        <div className="home_con_right">
          <img src={Cinema1} alt="img of cinema1" />
          <img src={Cinema3} alt="img of cinema3" />
          <img src={Cinema2} alt="img of cinema2" />
        </div>
      </div>
    </div>
  );
};
export default Home;
