import "./Home.css";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  F_SeaBeast,
  F_FindingADory,
  F_HorrorInForest,
  F_FaultInOurStars,
  F_IdeaOfYou,
  F_Ava,
  F_Annette,
  F_MrMalcolmsList,
  F_WildRobot,
} from "../../assets/index";

const Home = () => {
  const router = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [<F_SeaBeast />, <F_FindingADory />, <F_HorrorInForest />];
  const images1 = [<F_Annette />, <F_FaultInOurStars />, <F_IdeaOfYou />];
  const images2 = [<F_WildRobot />, <F_Ava />, <F_MrMalcolmsList />];

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
            "You're just a step away from enjoyment - book your ticket on time!"
          </h2>
          <Button
            buttonText="Book Movie"
            handleButtonOnClick={handleClickButton}
          />
        </div>
        <div className="home_con_right">
          {images[currentIndex]}
          {images1[currentIndex]}
          {images2[currentIndex]}
        </div>
      </div>
    </div>
  );
};
export default Home;
