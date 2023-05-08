import styles from "./NavBar.module.css"
import navLinks from "../../Utils/navBar.json"
import { useMediaQuery } from "react-responsive";

const NavBar = ({ toggleModal }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    
    return (
      <>
        {isMobile ? (
          <nav className={styles.navList}>
            {navLinks.map(({ name, href }) => (
              <a href={href} className={styles.navItem} onClick={toggleModal}>
                {name}
              </a>
            ))}
          </nav>
        ) : (
          <nav className={styles.navList}>
            {navLinks.map(({ name, href }) => (
              <a href={href} className={styles.navItem}>
                {name}
              </a>
            ))}
          </nav>
        )}
      </>
    );
}
 
export default NavBar;


