import { Link } from "react-router-dom";

import styles from "./classes.module.css";
import { OurFood } from "../../values/values";

const AllOurTrainers = () => {
  return (
    <div className={`${styles["all-trainers"]} container `}>
      <div className={styles.classes}>
        {OurFood.map((ele) => {
          return (
            <div
              className={styles.classes_item}
              key={ele.id}
              data-aos="fade-right"
            >
              <div className={styles.classes_image}>
                <img src={ele.image} alt="" />
              </div>
              <div className={styles.classes_content}>
                <h3>{ele.title}</h3>
                <p>{ele.subtitle}</p>
                <Link to={ele.ti}>Skaityti daugiau</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllOurTrainers;
