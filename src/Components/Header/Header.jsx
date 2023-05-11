import { useMediaQuery } from "react-responsive";

import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import RegisterBtn from "../RegisterBtn/RegisterBtn";
import SocIcons from "../SocIcons/SocIcons";
import styles from "./Header.module.css";
import {ReactComponent as DonutsSvg} from "../../Utils/images/pic donuts_tablet.svg"
import NavBar from "../NavBar/NavBar";

const Header = ({ toggleModal }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesktop = useMediaQuery({minWidth:1280})


  return (
    <header className={styles.header}>
      <div className={styles.iconsCon}>
        <Logo />
        {isTablet && <DonutsSvg className={styles.donuts} />}

        {isDesktop ? <NavBar /> : <Menu toggleModal={toggleModal} />}
      </div>
      {isDesktop ? (
        <div className={styles.textCon}>
          <h1 className={styles.title}>
            Donut Masterclass with the Donut King
          </h1>
          <p className={styles.text}>Hosted by Eva Green</p>
          <RegisterBtn />
          <SocIcons />
        </div>
      ) : (
        <>
          <div className={styles.textCon}>
            <h1 className={styles.title}>
              Donut Masterclass with the Donut King
            </h1>
            <p className={styles.text}>Hosted by Eva Green</p>
          </div>
          <RegisterBtn />
          <SocIcons />
        </>
      )}
    </header>
  );
};

export default Header;
