import phone from "./phone.png";
import email from "./email.png";
import web from "./web.png";

const Phone = () => {
  return (
    <img className="contact_page_left_logo" src={phone} alt="phone icon" />
  );
};

const Email = () => {
  return (
    <img className="contact_page_left_logo" src={email} alt="email icon" />
  );
};

const Web = () => {
  return <img className="contact_page_left_logo" src={web} alt="web icon" />;
};

export { Phone, Email, Web };
