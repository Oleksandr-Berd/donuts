import { useMediaQuery } from "react-responsive";

import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import RegisterBtn from "../RegisterBtn/RegisterBtn";
import SocIcons from "../SocIcons/SocIcons";
import styles from "./Header.module.css";
import {ReactComponent as DonutsSvg} from "../../Utils/images/pic donuts_tablet.svg"

const Header = ({ toggleModal }) => {
    const isTablet = useMediaQuery({ minWidth: 768 });


  return (
    <header className={styles.header}>
      <div className={styles.iconsCon}>
        <Logo />
        {isTablet && <DonutsSvg className={styles.donuts } />}
        <Menu toggleModal={toggleModal} />
      </div>
      <div className={styles.textCon}>
        <h1 className={styles.title}>Donut Masterclass with the Donut King</h1>
        <p className={styles.text}>Hosted by Eva Green</p>
      </div>
      <RegisterBtn />
      <SocIcons />
    </header>
  );
};

export default Header;
