import "../HowToBook.css";
import { steps } from "../../../data/stepdata.jsx";

const HowToBookInfo = () => {
  return (
    <>
      {steps.map((step) => (
        <div className="step_con" key={step.step}>
          <div className="image_con">{step.image}</div>
          <div className="description">
            <h3>Step {step.step}</h3>
            <p>{step.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};
export default HowToBookInfo;
