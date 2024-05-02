import styles from "./about.module.css";
import { Link } from "react-router-dom";

import { OurPlan } from "../../values/values";
const FitnessPlan = () => {
  return (
    <div className={`${styles["all-trainers"]} container `}>
      <div className={styles.classes}>
        {OurPlan.map((ele) => {
          return (
            <div
              className={styles.classes_item}
              key={ele.id}
              data-aos="fade-right"
            >
              <img src={ele.image} alt="" />
              <div className={styles.classes_box}>
                <h3>{ele.title}</h3>
                <p>{ele.subtitle}</p>
                <ul>
                  <li>{ele.list}</li>
                </ul>
                <Link to={ele.ti}>Skaityti daugiau</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FitnessPlan;
