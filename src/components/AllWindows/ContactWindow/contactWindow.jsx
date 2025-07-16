import "./contactWindow.scss";
import Window from "../../Window/window";
import contactIcon from "../../../assets/contact_small.png";
import ContactForm from "../../ContactForm/contactForm";


function ContactWindow({ onClose }) {
  return (
    <Window title="Contact Me" iconSrc={contactIcon} onClose={onClose}>
     <ContactForm/>
    </Window>
  );
}

export default ContactWindow;
