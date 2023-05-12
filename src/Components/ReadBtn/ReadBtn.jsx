import styles from "./ReadBtn.module.css"

const ReadBtn = ({handleReadMore}) => {
    return (<button className={styles.btn} onClick={handleReadMore}>Read more</button> );
}
 
export default ReadBtn;