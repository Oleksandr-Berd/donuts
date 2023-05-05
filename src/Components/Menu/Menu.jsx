import styles from "./Menu.module.css"

import menuIcon from "../../Utils/images/menu.png"

const Menu = () => {
    return ( <button className={styles.menuBtn}><img src={menuIcon} alt="menu" /></button> );
}
 
export default Menu;