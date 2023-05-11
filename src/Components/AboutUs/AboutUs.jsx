import styles from "./AboutUs.module.css"

import { useMediaQuery } from "react-responsive";

import ReadBtn from "../ReadBtn/ReadBtn";
import packageImg from "../../Utils/images/pic_tablet.png"

const AboutUs = () => {
  const isTablet = useMediaQuery({ minWidth: 768 });
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const isDesktop = useMediaQuery({minWidth:1280})

  return (
    <>
      {isTablet && !isDesktop && (
        <section className={styles.section} id="aboutUs">
          <img src={packageImg} alt="package" className={styles.package} />
          <div className={styles.textCon}>
            <h2 className={styles.title}>About us</h2>

            <p className={styles.text}>
              Oh My Donut is the shop which adores tasty deserts and spend hours
              to create sophisticated donuts which will save the world!
            </p>
            <p className={styles.text}>
              Eva has been baking since she was six years old and over the last
              49 years, she has created hundreds of cakes for weddings and has
              baked for many celebrities. Eva and our shop have received
              multiple awards & recognition for excellence.
            </p>
  
           
              <div className={styles.btnCon}>
                <ReadBtn />
              </div>
           
          </div>
        </section>
      )}
      {isMobile && (
        <section className={styles.section} id="aboutUs">
          <h2 className={styles.title}>About us</h2>
          <p className={styles.text}>
            Oh My Donut is the shop which adores tasty deserts and spend hours
            to create sophisticated donuts which will save the world!
          </p>
          <p className={styles.text}>
            Eva has been baking since she was six years old and over the last 49
            years, she has created hundreds of cakes for weddings and has baked
            for many celebrities. Eva and our shop have received multiple awards
            & recognition for excellence.
          </p>
          <div className={styles.btnCon}>
            <ReadBtn />
          </div>
        </section>
      )}
      {isDesktop && (
        <section className={styles.section} id="aboutUs">
          <div className={styles.textCon}>
            <h2 className={styles.title}>About us</h2>

            <p className={styles.text}>
              Oh My Donut is the shop which adores tasty deserts and spend hours
              to create sophisticated donuts which will save the world!
            </p>
            <p className={styles.text}>
              Eva has been baking since she was six years old and over the last
              49 years, she has created hundreds of cakes for weddings and has
              baked for many celebrities. Eva and our shop have received
              multiple awards & recognition for excellence.
            </p>
           
              <p className={styles.text}>
                We are going to teach you how to cook with passion and sparkles
                in your eyes! We love what we do and believe you will enjoy our
                cooking atmosphere!
              </p>
        
          </div>
        </section>
      )}
    </>
  );
}
 
export default AboutUs;