import { useMediaQuery } from "react-responsive";

import RegistrationForm from "../RegistrationForm/RegistrationForm";
import styles from "./Registration.module.css";

const Registration = () => {

  const isMobile = useMediaQuery({ maxWidth: 767 })
  const isTablet = useMediaQuery({minWidth:768})

  return (
    <section className={styles.section}>
      {isTablet && <h2 className={styles.title}>Registration</h2>}
      <div className={styles.con}>
        <div className={styles.textCon}>
          {isMobile && <h2 className={styles.title}>Registration</h2>}
          <p className={styles.text}>May 23, 11:00 New York</p>
          <p className={styles.text}>$ 699</p>
        </div>
        <RegistrationForm />
      </div>
    </section>
  );
};

export default Registration;
