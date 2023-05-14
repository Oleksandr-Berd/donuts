import styles from "./HeaderLayout.module.css"

const HeaderLayout = ({children}) => {
    return (<div className={styles.layout}>{children }</div> );
}
 
export default HeaderLayout;