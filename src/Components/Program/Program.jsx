import { useMediaQuery } from "react-responsive";
import { useState } from "react";

import ReadBtn from "../ReadBtn/ReadBtn";
import styles from "./Program.module.css";
import { ReactComponent as CloseSvg } from "../../Utils/images/close.svg";

import ProgramCards from "./ProgramCards/ProgramCards";

const Program = () => {
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const [isReadMore, setIsReadMore] = useState(false);

  const handleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <>
      {isDesktop ? (
        <section className={styles.section} id="program">
          <div className={styles.con}>
            <h2 className={styles.title}>Program</h2>
            <p className={styles.text}>
              Indulge in this immersive sweet treat experience with The Chef
              Donut Queen in her New York donut shop!
            </p>
            <ul className={styles.list}>
              <li className={styles.item}>A stand up history of donuts</li>
              <li className={styles.item}>
                Make 3 donut flavors of your choice
              </li>
              <li className={styles.item}>Enjoy all-you-can-eat donuts</li>
              <li className={styles.item}>
                Cocktail pairings and coffee included
              </li>
              <li className={styles.item}>
                Photoshoot by professional photographer
              </li>
              <li className={styles.item}>
                Secret receipt of cooking from Eva
              </li>
              <li className={styles.item}>
                All products are included in the price
              </li>
            </ul>
            <p className={styles.text}>
              Come with your dear people and friends and you will spend an
              unforgettable time and will become a real professional in donuts
              cooking!{" "}
            </p>
          </div>
          <ProgramCards />
        </section>
      ) : (
        <section className={styles.section} id="program">
          <div className={styles.con}>
            <h2 className={styles.title}>Program</h2>
            {isReadMore ? (
              <div className={styles.readMoreCon}>
                <div className={styles.readMoreTextCon}>
                  <p className={styles.textModal}>
                    Indulge in this immersive sweet treat experience with The
                    Chef Donut Queen in her New York donut shop!
                  </p>
                  <ul className={styles.list}>
                    <li className={styles.item}>
                      A stand up history of donuts
                    </li>
                    <li className={styles.item}>
                      Make 3 donut flavors of your choice
                    </li>
                    <li className={styles.item}>
                      Enjoy all-you-can-eat donuts
                    </li>
                    <li className={styles.item}>
                      Cocktail pairings and coffee included
                    </li>
                    <li className={styles.item}>
                      Photoshoot by professional photographer
                    </li>
                    <li className={styles.item}>
                      Secret receipt of cooking from Eva
                    </li>
                    <li className={styles.item}>
                      All products are included in the price
                    </li>
                  </ul>
                  <p className={styles.textModal}>
                    Come with your dear people and friends and you will spend an
                    unforgettable time and will become a real professional in
                    donuts cooking!{" "}
                  </p>
                </div>
                <button
                  type="button"
                  className={styles.btn}
                  onClick={handleReadMore}
                >
                  <CloseSvg className={styles.close} />
                </button>
              </div>
            ) : (
              <>
                <p className={styles.text}>
                  Indulge in this immersive sweet treat experience with The Chef
                  Donut Queen in her New York donut shop!
                </p>
                <ul className={styles.list}>
                  <li className={styles.item}>A stand up history of donuts</li>
                  <li className={styles.item}>
                    Make 3 donut flavors of your choice
                  </li>
                  <li className={styles.item}>Enjoy all-you-can-eat donuts</li>
                  <li className={styles.item}>
                    Cocktail pairings and coffee included
                  </li>
                  <li className={styles.item}>
                    Photoshoot by professional photographer
                  </li>
                  <li className={styles.item}>
                    Secret receipt of cooking from Eva
                  </li>
                  <li className={styles.item}>
                    All products are included in the price
                  </li>
                </ul>
              </>
            )}
            {/* <p className={styles.text}>
              Indulge in this immersive sweet treat experience with The Chef
              Donut Queen in her New York donut shop!
            </p>
            <ul className={styles.list}>
              <li className={styles.item}>A stand up history of donuts</li>
              <li className={styles.item}>
                Make 3 donut flavors of your choice
              </li>
              <li className={styles.item}>Enjoy all-you-can-eat donuts</li>
              <li className={styles.item}>
                Cocktail pairings and coffee included
              </li>
              <li className={styles.item}>
                Photoshoot by professional photographer
              </li>
              <li className={styles.item}>
                Secret receipt of cooking from Eva
              </li>
              <li className={styles.item}>
                All products are included in the price
              </li>
            </ul> */}
            <div className={styles.btnCon}>
              <ReadBtn handleReadMore={handleReadMore} />
            </div>
          </div>
          <ProgramCards />
        </section>
      )}
    </>
  );
};

export default Program;
