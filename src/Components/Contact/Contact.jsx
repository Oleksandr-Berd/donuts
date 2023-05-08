import ContactForm from "../ContactForm/ContactForm";
import styles from "./Contact.module.css"

const Contact = () => {
    return (
      <div className={styles.con}>
        <h3 className={styles.title}>Contact</h3>
        <p className={styles.text}>
          height: 20px; width: 232px; left: 44px; top: 3108px; border-radius:
          nullpx;
            </p>
            <ContactForm/>
      </div>
    );
}
 
export default Contact;