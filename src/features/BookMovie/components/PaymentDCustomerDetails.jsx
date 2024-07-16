import "./styles/PaymentDialog.css";

const PaymentDCustomerDetails = ({
  name,
  surname,
  email,
  handleNameChange,
  handleSurnameChange,
  handleEmailChange,
}) => {
  return (
    <div className="customer_details">
      <div>
        <label>Name:</label>
        <input
          type="text"
          placeholder="Name..."
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div>
        <label>Surname:</label>
        <input
          type="text"
          placeholder="Surname..."
          value={surname}
          onChange={handleSurnameChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Email..."
          value={email}
          onChange={handleEmailChange}
        />
      </div>
    </div>
  );
};

export default PaymentDCustomerDetails;
