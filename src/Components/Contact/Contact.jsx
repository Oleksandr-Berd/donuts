import ContactForm from "../ContactForm/ContactForm";
import styles from "./Contact.module.css"

const Contact = () => {
    return (
      <div className={styles.con} id="contacts">
        <h3 className={styles.title}>Contact</h3>
        <p className={styles.text}>We will answer any question!</p>
        <ContactForm />
      </div>
    );
}
 
export default Contact;