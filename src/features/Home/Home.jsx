import "./Home.css";
import F_Agent from "../../assets/movies/f_agent.webp";
import F_Archer from "../../assets/movies/f_archer.jpg";
import F_SeaBeast from "../../assets/movies/f_sea_beast.webp";
import F_Furiosa from "../../assets/movies/f_furiosa.jpg";
import F_Mage from "../../assets/movies/f_mage.webp";
import F_Pyormanen from "../../assets/movies/f_pyormanen.jpg";
import F_LionKing from "../../assets/movies/f_lion_king.webp";
import F_BloodyHand from "../../assets/movies/f_bloody_hand.jpg";
import F_PrincessBride from "../../assets/movies/f_princess_bride.jpg";
import F_CorpseBride from "../../assets/movies/f_corpse_bride.jpg";
import F_Stallion from "../../assets/movies/f_stallion.webp";
import F_Ava from "../../assets/movies/f_ava.jpg";
import F_Annette from "../../assets/movies/f_annette.jpg";
import F_Gold from "../../assets/movies/f_gold.webp";
import F_Insideout2 from "../../assets/movies/f_insideout2.jpeg";
import F_Hogar from "../../assets/movies/f_hogar.jpg";
import F_FantasyFootball from "../../assets/movies/f_fantasy_football.jpg";
import F_Devara from "../../assets/movies/f_devara.jpg";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const router = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [F_LionKing, F_PrincessBride, F_CorpseBride];
  const images1 = [F_Annette, F_Gold, F_Insideout2];
  const images2 = [F_Ava, F_BloodyHand, F_Stallion];
  const images3 = [F_Archer, F_Mage, F_Agent];
  const images4 = [F_SeaBeast, F_Furiosa, F_Pyormanen];
  const images5 = [F_Devara, F_FantasyFootball, F_Hogar];

  const handleClickButton = () => {
    router("/book_movie");
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="home_page">
      <div className="home_page_con">
        <div className="home_con_left">
          <h1>Welcome!</h1>
          <h2>
            "You're just a step away from enjoyment – book your ticket on time!"
          </h2>
          <Button
            buttonText="Book Movie"
            handleButtonOnClick={handleClickButton}
          />
        </div>
        <div className="home_con_right">
          <img src={images[currentIndex]} alt="cinema slide" />
          <img src={images1[currentIndex]} alt="cinema slide" />
          <img src={images2[currentIndex]} alt="cinema slide" />
          <img src={images3[currentIndex]} alt="cinema slide" />
          <img src={images4[currentIndex]} alt="cinema slide" />
          <img src={images5[currentIndex]} alt="cinema slide" />
        </div>
      </div>
    </div>
  );
};
export default Home;
