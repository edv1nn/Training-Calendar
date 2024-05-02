import styles from "./contact.module.css";

const HeroSection = () => {
  return (
    <div
      className={`${styles.first} margin-sections`}
      data-aos="zoom-out-right"
    >
      <div className={styles.trainers_head}>
        <h2 className="title">Kontaktai</h2>
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          quibusdam quam omnis, magnam eligendi cum consequuntur animi nemo
          aliquid repellat dolores mollitia sint, ipsum sed quidem aperiam optio
          illum! Pariatur!{" "}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
