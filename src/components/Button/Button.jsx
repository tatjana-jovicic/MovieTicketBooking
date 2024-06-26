import "./Button.css";

const Button = ({ buttonText, handleButtonOnClick }) => {
  return (
    <button className="button" onClick={handleButtonOnClick}>
      {buttonText}
    </button>
  );
};
export default Button;
