import styles from "./AboutUs.module.css"
import ReadBtn from "./ReadBtn/ReadBtn";

const AboutUs = () => {
    return (
      <section className={styles.section}>
        <h2 className={styles.title}>About us</h2>
        <p className={styles.text}>
          Oh My Donut is the shop which adores tasty deserts and spend hours to
          create sophisticated donuts which will save the world!
        </p>
        <p className={styles.text}>
          Eva has been baking since she was six years old and over the last 49
          years, she has created hundreds of cakes for weddings and has baked
          for many celebrities. Eva and our shop have received multiple awards &
          recognition for excellence.
        </p>
        <div className={styles.btnCon}>
          <ReadBtn />
        </div>
      </section>
    );
}
 
export default AboutUs;