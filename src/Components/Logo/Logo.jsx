import { useMediaQuery } from "react-responsive";

import styles from "./Logo.module.css"

import logoImage from "../../Utils/images/logo.png"
import logoImageDesktop from "../../Utils/images/logo_desktop.png"

const Logo = () => {
  const isDesktop = useMediaQuery({ minWidth: 1280 });

    return (
      <>
        {isDesktop ? (
          <img src={logoImageDesktop} alt="logo" className={styles.logo} />
        ) : (
          <img src={logoImage} alt="logo" className={styles.logo} />
        )}
      </>
    );
}
 
export default Logo;