import styles from "./price.module.css";

const Price = () => {
  return (
    <div className={`${styles.trainers} container`}>
      <div className={styles.trainers_head} data-aos="zoom-out-right">
        <h2 className="title">Kainos</h2>
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          quibusdam quam omnis, magnam eligendi cum consequuntur animi nemo
          aliquid repellat dolores mollitia sint, ipsum sed quidem aperiam optio
          illum! Pariatur!{" "}
        </p>
      </div>

      <div className={styles.price}>
        <div className={styles.price_inner} data-aos="flip-up">
          <div className={styles.price_item}>
            <h3>Start</h3>
            <div>
              <h4>€7.99</h4>
              <p>Mokėjimas kas mėnesį</p>
            </div>
            <ul>
              <li>Begalinis Kuponas</li>
              <li>Flexible training sessions</li>
              <li>Healthy food plan</li>
            </ul>
            <button>Pirkti narystę</button>
          </div>
          <div className={styles.price_item}>
            <h3>Comfort</h3>
            <div>
              <h4>€14.99</h4>
              <p>Mokėjimas kas mėnesį</p>
            </div>
            <ul>
              <li>60-minute training sessions</li>
              <li>4 + 1 Days a week</li>
              <li>50 Class Times Available</li>
              <li>20 minutes of invigorating yoga</li>
            </ul>
            <button>Pirkti narystę</button>
          </div>
          <div className={styles.price_item}>
            <h3>Premium</h3>
            <div>
              <h4>€25.99</h4>
              <p>Mokėjimas kas mėnesį</p>
            </div>
            <ul>
              <li>Begalinis Kuponas</li>
              <li>Flexible training sessions</li>
              <li>60-minute training sessions</li>
              <li>4 + 1 Days a week</li>
              <li>50 Class Times Available</li>
              <li>20 minutes of invigorating yoga</li>
            </ul>
            <button>Pirkti narystę</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
