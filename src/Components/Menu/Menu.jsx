import styles from "./Menu.module.css";

import menuIcon from "../../Utils/images/menu.png";

const Menu = ({toggleModal}) => {
  return (
    <button className={styles.menuBtn} onClick={toggleModal}>
      <img src={menuIcon} alt="menu" />
    </button>
  );
};
export default Menu;
