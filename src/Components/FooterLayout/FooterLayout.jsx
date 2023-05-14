import styles from "./FooterLayout.module.css"

const FooterLayout = ({children}) => {
    return <div className={styles.layout}>{children}</div>;
}
 
export default FooterLayout;