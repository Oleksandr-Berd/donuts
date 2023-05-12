import styles from "./AboutUs.module.css";

import { useMediaQuery } from "react-responsive";
import { useState } from "react";

import ReadBtn from "../ReadBtn/ReadBtn";
import packageImg from "../../Utils/images/pic_tablet.png";
import { ReactComponent as CloseSvg } from "../../Utils/images/close.svg";

const AboutUs = () => {
  const isTablet = useMediaQuery({ minWidth: 768 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  const [isReadMore, setIsReadMore] = useState(false);

  const handleReadMore = () => {
    setIsReadMore(!isReadMore);
    console.log(isReadMore);
  };

  return (
    <>
      {isReadMore && (
        <div className={styles.readMoreCon}>
          <div className={styles.textConReadMore}>
            <h2 className={styles.titleModal}>About us</h2>

            <p className={styles.textModal}>
              Oh My Donut is the shop which adores tasty deserts and spend hours
              to create sophisticated donuts which will save the world!
            </p>
            <p className={styles.textModal}>
              Eva has been baking since she was six years old and over the last
              49 years, she has created hundreds of cakes for weddings and has
              baked for many celebrities. Eva and our shop have received
              multiple awards & recognition for excellence.
            </p>

            <p className={styles.textModal}>
              We are going to teach you how to cook with passion and sparkles in
              your eyes! We love what we do and believe you will enjoy our
              cooking atmosphere!
            </p>
          </div>
          <button type="button" className={styles.btn} onClick={handleReadMore}>
            <CloseSvg className={styles.close} />
          </button>
        </div>
      )}
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
              <ReadBtn handleReadMore={handleReadMore} />
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
            <ReadBtn onClick={handleReadMore} />
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
              We are going to teach you how to cook with passion and sparkles in
              your eyes! We love what we do and believe you will enjoy our
              cooking atmosphere!
            </p>
          </div>
        </section>
      )}
    </>
  );
};

export default AboutUs;
