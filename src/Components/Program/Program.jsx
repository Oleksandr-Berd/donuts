import ReadBtn from "../ReadBtn/ReadBtn";
import styles from "./Program.module.css";
import ProgramCards from "./ProgramCards/ProgramCards";

const Program = () => {
  return (
    <section className={styles.section} id="program">
      <h2 className={styles.title}>Program</h2>
      <p className={styles.text}>
        Indulge in this immersive sweet treat experience with The Chef Donut
        Queen in her New York donut shop!
      </p>
      <ul className={styles.list}>
        <li className={styles.item}>A stand up history of donuts</li>
        <li className={styles.item}>Make 3 donut flavors of your choice</li>
        <li className={styles.item}>Enjoy all-you-can-eat donuts</li>
        <li className={styles.item}>Cocktail pairings and coffee included</li>
        <li className={styles.item}>Photoshoot by professional photographer</li>
        <li className={styles.item}>Secret receipt of cooking from Eva</li>
        <li className={styles.item}>All products are included in the price</li>
      </ul>
      <div className={styles.btnCon}>
        <ReadBtn />
      </div>
      <ProgramCards />
    </section>
  );
};

export default Program;
