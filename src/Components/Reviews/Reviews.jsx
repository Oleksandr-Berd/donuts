import { useMediaQuery } from "react-responsive";

import { useEffect, useState } from "react";
import styles from "./Reviews.module.css";
import { getData } from "../../Utils/helpers";
import { reviewsUrl } from "../../Utils/url";
import { marks } from "../../Utils/marks";
import button from "../../Utils/images/previous.png"
import Registration from "../Registration/Registration";
import Contact from "../Contact/Contact";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [page, setPage] = useState(1);
  let limit
  

  const isTablet = useMediaQuery({ minWidth: 768 })
  const isMobile = useMediaQuery({ maxWidth: 767 })
  
  if (isMobile) {
    limit = 1
  }
  if (isTablet) {
    limit=3
  }
  
  useEffect(() => {
    const fetchReviews = () => {

      
   getData(reviewsUrl, page, limit ).then((response) =>
     setReviews(response.data)
   );

 
   getData(reviewsUrl, page, limit).then((response) =>
     setReviews(response.data)
   );

     
     
    };

    fetchReviews();
  }, [limit, page]);

    const nextPage = () => {
        setPage((prevPage) => prevPage + 1)
    }

    const prevPage = () => {
      setPage((prevPage) => prevPage - 1);
    };
    
  return (
    <>
      {isMobile && (
        <section className={styles.section} id="reviews">
          <h2 className={styles.title}>Reviews</h2>
          <ul className={styles.reviewList}>
            {reviews.map(({ avatar, mark, name, review, id }) => (
              <li className={styles.reviewItem} key={id}>
                <img src={avatar} alt="avatar" className={styles.avatar} />
                <ul className={styles.marksList}>
                  {marks.slice(mark * -1).map((el, idx) => (
                    <li className={styles.starItem} key={idx}>
                      <img src={el} alt="mark" className={styles.star} />
                    </li>
                  ))}
                </ul>
                <h4 className={styles.name}>{name}</h4>
                <p className={styles.text}>{review}</p>
              </li>
            ))}
            <div className={styles.btnCon}>
              {page > 1 ? (
                <button className={styles.btnPage} onClick={prevPage}>
                  <img src={button} alt="button" className={styles.line} />
                </button>
              ) : (
                <button className={styles.btnPage} disabled>
                  <img src={button} alt="button" className={styles.line} />
                </button>
              )}
              <p className={styles.count}>
                {page}/{limit}
              </p>
              {page < 10 ? (
                <button className={styles.btnPage} onClick={nextPage}>
                  <img src={button} alt="button" className={styles.line} />
                </button>
              ) : (
                <button className={styles.btnPage} disabled>
                  <img src={button} alt="button" className={styles.line} />
                </button>
              )}
            </div>
          </ul>
          <Registration />
          <Contact />
        </section>
      )}
      {isTablet && (
        <section className={styles.section} id="reviews">
          <h2 className={styles.title}>Reviews</h2>
          <div className={styles.reviewList}>
            {reviews.length > 0 && (
              <div className={styles.reviewsCon}>
                <div className={styles.sideCon}>
                  <img
                    src={reviews[0].avatar}
                    alt="avatar"
                    className={styles.avatarSide}
                  />

                  <ul className={styles.marksList}>
                    {marks.slice(reviews[0].mark * -1).map((el, idx) => (
                      <li className={styles.starItem} key={idx}>
                        <img src={el} alt="mark" className={styles.star} />
                      </li>
                    ))}
                  </ul>
                  <h4 className={styles.name}>{reviews[0].name}</h4>
                </div>
                <li className={styles.reviewItem} key={reviews[1].id}>
                  <img
                    src={reviews[1].avatar}
                    alt="avatar"
                    className={styles.avatar}
                  />
                  <ul className={styles.marksList}>
                    {marks.slice(reviews[1].mark * -1).map((el, idx) => (
                      <li className={styles.starItem} key={idx}>
                        <img src={el} alt="mark" className={styles.star} />
                      </li>
                    ))}
                  </ul>
                  <h4 className={styles.name}>{reviews[1].name}</h4>
                  <p className={styles.text}>{reviews[1].review}</p>
                </li>
                <div className={styles.sideCon}>
                  <img
                    src={reviews[2].avatar}
                    alt="avatar"
                    className={styles.avatarSide}
                  />

                  <ul className={styles.marksList}>
                    {marks.slice(reviews[2].mark * -1).map((el, idx) => (
                      <li className={styles.starItem} key={idx}>
                        <img src={el} alt="mark" className={styles.star} />
                      </li>
                    ))}
                  </ul>
                  <h4 className={styles.name}>{reviews[2].name}</h4>
                </div>
              </div>
            )}
            <div className={styles.btnCon}>
              {page > 1 ? (
                <button className={styles.btnPage} onClick={prevPage}>
                  <img src={button} alt="button" className={styles.line} />
                </button>
              ) : (
                <button className={styles.btnPage} disabled>
                  <img src={button} alt="button" className={styles.line} />
                </button>
              )}
              <p className={styles.count}>
                {page}/{limit}
              </p>
              {page < 10 ? (
                <button className={styles.btnPage} onClick={nextPage}>
                  <img src={button} alt="button" className={styles.line} />
                </button>
              ) : (
                <button className={styles.btnPage} disabled>
                  <img src={button} alt="button" className={styles.line} />
                </button>
              )}
            </div>
          </div>
          <Registration />
          <Contact />
        </section>
      )}
    </>
  );
};

export default Reviews;


