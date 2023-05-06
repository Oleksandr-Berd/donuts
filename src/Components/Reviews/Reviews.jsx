import { useEffect, useState } from "react";
import styles from "./Reviews.module.css";
import { getData } from "../../Utils/helpers";
import { reviewsUrl } from "../../Utils/url";
import { marks } from "../../Utils/marks";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = () => {
      getData(reviewsUrl).then((response) => setReviews(response.data));
    };

    fetchReviews();
  }, []);

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
      </ul>
    </section>
  );
};

export default Reviews;
