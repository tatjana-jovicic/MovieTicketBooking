import Button from "../../../components/Button/Button";
import "./styles/PaymentDialog.css";

const PaymentDDialogButtons = ({ onClose, handleToPay }) => {
  return (
    <div className="dialog_buttom">
      <Button buttonText="Cancel" handleButtonOnClick={onClose} />
      <Button buttonText="Pay" handleButtonOnClick={handleToPay} />
    </div>
  );
};

export default PaymentDDialogButtons;
