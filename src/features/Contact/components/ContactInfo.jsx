import "../Contact.css";
import { Phone, Email, Web } from "../../../assets/index";

const ContactInfo = () => {
  const contacts = [
    {
      logo: <Phone />,
      title: "Phone",
      description: "+912 3 567 8987",
    },
    {
      logo: <Email />,
      title: "Email",
      description: "movieticket@gmail.com",
    },
    {
      logo: <Web />,
      title: "Web",
      description: "movieticketbooking.com",
    },
  ];

  return (
    <div className="contact_page_left_list_con">
      {contacts.map((contact) => (
        <div className="contact_page_left_list" key={contact.title}>
          {contact.logo}
          <div className="contact_page_left_list_text">
            <h3>{contact.title}</h3>
            <p>{contact.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ContactInfo;
