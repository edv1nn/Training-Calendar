import { articlesNewsData } from "../../values/values";
import styles from "./home.module.css";

const ArticlesNews = () => {
  return (
    <div className={`${styles["articles-news"]} container sections-padding`}>
      <div className={styles.trainers_head}>
        <h2 className="title">Apie Mus</h2>
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          quibusdam quam omnis, magnam eligendi cum consequuntur animi nemo
          aliquid repellat dolores mollitia sint, ipsum sed quidem aperiam optio
          illum! Pariatur!{" "}
        </p>
      </div>
      <div className={styles.articles_content}>
        {articlesNewsData.map((ele) => {
          return (
            <div
              className={styles.articles_item}
              key={ele.id}
              data-aos="zoom-out-right"
            >
              <div className={styles.articles_block}>
                <img src={ele.image} alt="" />
                <h2>{ele.about}</h2>
                <p>{ele.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArticlesNews;
