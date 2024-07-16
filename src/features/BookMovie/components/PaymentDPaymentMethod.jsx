import "./styles/PaymentDialog.css";

const PaymentDPaymentMethod = ({
  paymentMethod,
  handlePaymentMethodChange,
}) => {
  return (
    <div className="payment_method">
      Mark the payment method:
      <label>
        <input
          type="radio"
          checked={paymentMethod === "card"}
          onChange={() => handlePaymentMethodChange("card")}
        />
        With Card Now
      </label>
      <label>
        <input
          type="radio"
          checked={paymentMethod === "cash"}
          onChange={() => handlePaymentMethodChange("cash")}
        />
        Cash on delivery
      </label>
    </div>
  );
};

export default PaymentDPaymentMethod;
