import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./home.module.css";

const QuickInfo = () => {
  const infoItems = [
    {
      question: "Lorem ipsum dolor sit amet consectetur",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut hic asperiores rerum quia doloremque ipsum.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut hic asperiores rerum quia doloremque ipsum.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut hic asperiores rerum quia doloremque ipsum.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut hic asperiores rerum quia doloremque ipsum.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut hic asperiores rerum quia doloremque ipsum.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut hic asperiores rerum quia doloremque ipsum.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div
      className={`${styles["quick-info"]} container sections-padding`}
      data-aos="fade-right"
    >
      <div className={styles.trainers_head}>
        <h2 className="title">Dažnai užduodami klausimai</h2>
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          quibusdam quam omnis, magnam eligendi cum consequuntur animi nemo
          aliquid repellat dolores mollitia sint, ipsum sed quidem aperiam optio
          illum! Pariatur!
        </p>
      </div>
      <div className={styles["quick-info-column"]}>
        {infoItems.map((item, index) => (
          <div className={styles["quick-info-item"]} key={index}>
            <div className={styles["quick-info-content"]}>
              <h4>{item.question}</h4>
              <FontAwesomeIcon
                icon={faPlus}
                className={`${styles.icon} ${
                  activeIndex === index ? styles.activeIcon : ""
                }`}
                onClick={() => toggleItem(index)}
              />
            </div>
            {activeIndex === index && (
              <p className={`${styles.activeParagraph} ${styles.active}`}>
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickInfo;
