import SocIcons from "../SocIcons/SocIcons";
import styles from "./Footer.module.css"

const Footer = () => {
    return (
      <footer className={styles.footer}>
        <SocIcons />
        <div className={styles.addressCon}>
          <a href="tel:9102228855" className={styles.tel}>
            (910)222-8855
          </a>
          <a
            href="https://goo.gl/maps/Wn3hRn6PyPr2MZnx5?coh=178571&entry=tt"
            className={styles.address}
          >
            New York
          </a>
        </div>
      </footer>
    );
}
 
export default Footer;