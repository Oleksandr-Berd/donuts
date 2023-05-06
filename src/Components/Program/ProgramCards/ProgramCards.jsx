import styles from "./ProgramCards.module.css"

import img from "../../../Utils/images/Frame 23.png";
import img2 from "../../../Utils/images/Frame 24.png";
import img3 from "../../../Utils/images/Frame 25.png";
import img4 from "../../../Utils/images/Frame 26.png";
import icon from "../../../Utils/images/Frame 19.png";
import icon2 from "../../../Utils/images/Frame 20.png";
import icon3 from "../../../Utils/images/Frame 21.png";
import icon4 from "../../../Utils/images/Frame 22.png";



const ProgramCards = () => {
    return (
      <ul className={styles.cadsList}>
        <li className={styles.cardsItem}>
          <img src={img} alt="donut" className={styles.img} />
          <div className={styles.cardCon}>
            <h3 className={styles.cardTitle}>Type of the event</h3>
            <p className={styles.cardText}>Cooking classes</p>
            <img src={icon} alt="icon" />
          </div>
        </li>
        <li className={styles.cardsItem}>
          <img src={img2} alt="donut" className={styles.img} />

          <div className={styles.cardCon}>
            <h3 className={styles.cardTitle}>Number of guests</h3>
            <p className={styles.cardText}>1 to 20</p>
            <img src={icon2} alt="icon" />
          </div>
        </li>
        <li className={styles.cardsItem}>
          <img src={img3} alt="donut" className={styles.img} />

          <div className={styles.cardCon}>
            <h3 className={styles.cardTitle}>Time of the event</h3>
            <p className={styles.cardText}>18:30 (2.5 hours)</p>
            <img src={icon3} alt="icon" />
          </div>
        </li>
        <li className={styles.cardsItem}>
          <img src={img4} alt="donut" className={styles.img} />

          <div className={styles.cardCon}>
            <h3 className={styles.cardTitle}>The host speaks</h3>
            <p className={styles.cardText}>English, French</p>
            <img src={icon4} alt="icon" />
          </div>
        </li>
      </ul>
    );
}
 
export default ProgramCards;