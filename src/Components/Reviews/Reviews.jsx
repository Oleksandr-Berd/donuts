import { useEffect, useState } from "react";
import styles from "./Reviews.module.css";
import { getData } from "../../Utils/helpers";
import { reviewsUrl } from "../../Utils/url";
import { marks } from "../../Utils/marks";
import button from "../../Utils/images/previous.png"
import Registration from "../Registration/Registration";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [page, setPage] = useState(1);
    const limit = 10

  useEffect(() => {
    const fetchReviews = () => {
      getData(reviewsUrl, page).then((response) => setReviews(response.data));
    };

    fetchReviews();
  }, [page]);

    const nextPage = () => {
        setPage((prevPage) => prevPage + 1)
    }

    const prevPage = () => {
      setPage((prevPage) => prevPage - 1);
    };
    
  return (
    <section className={styles.section}>
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
          <Registration/>
    </section>
  );
};

export default Reviews;
