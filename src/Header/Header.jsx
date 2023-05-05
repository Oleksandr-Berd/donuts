import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.iconsCon}>
        <Logo />
        <Menu />
      </div>
    </header>
  );
};

export default Header;
