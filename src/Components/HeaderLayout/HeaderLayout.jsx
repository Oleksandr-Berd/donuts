import styles from "./HeaderLayout.module.css"

const HeaderLayout = ({children}) => {
    return (<section className={styles.layout}>{children }</section> );
}
 
export default HeaderLayout;