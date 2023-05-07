import RegistrationForm from "../RegistrationForm/RegistrationForm";
import styles from "./Registration.module.css";

const Registration = () => {
  return (
    <div className={styles.con}>
      <div className={styles.textCon}>
        <h2 className={styles.title}>Registration</h2>
        <p className={styles.text}>May 23, 11:00 New York</p>
        <p className={styles.text}>$ 699</p>
          </div>
          <RegistrationForm/>
    </div>
  );
};

export default Registration;
