import styles from "./Logo.module.css"

import logoImage from "../../Utils/images/logo.png"

const Logo = () => {
    return (<>
        <img src={logoImage} alt="logo" className={styles.logo } /></>);
}
 
export default Logo;