import styles from "./FooterLayout.module.css"

const FooterLayout = ({children}) => {
    return <section className={styles.layout}>{children}</section>;
}
 
export default FooterLayout;