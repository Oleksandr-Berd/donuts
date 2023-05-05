import styles from "./ProgramCards.module.css"

const ProgramCards = () => {
    return (
      <ul className={styles.cadsList}>
        <li className={styles.cardsItem}></li>
        <li className={styles.cardsItem}></li>
        <li className={styles.cardsItem}></li>
        <li className={styles.cardsItem}></li>
      </ul>
    );
}
 
export default ProgramCards;