import "./Contact.css";
import Button from "../../components/Button/Button";
import ContactInfo from "./components/ContactInfo";

const Contact = () => {
  return (
    <div className="contact_page">
      <div className="contact_con">
        <div className="contact_con_left">
          <h2>
            For any questions, you can contact us through the following contact
            forms
          </h2>
          <hr />
          <ContactInfo />
        </div>
        <div className="contact_con_right">
          <form className="form">
            <label>Name</label>
            <input type="text" placeholder="Enter your Name" />
            <label>Email</label>
            <input type="text" placeholder="Enter a valid email address" />
            <label>Message</label>
            <textarea placeholder="Enter your message"></textarea>
            <div className="checkbox_div">
              <input type="checkbox" />
              <label>
                I accept the <a href="#">Terms of Service</a>
              </label>
            </div>
            <Button buttonText="Send your request" />
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
