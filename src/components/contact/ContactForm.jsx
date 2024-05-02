import { useState } from "react";
import styles from "./contact.module.css";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const formHandler = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email) {
      setErrorMessage("Prašome užpildyti visus laukus!");
      return;
    } else {
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
      setErrorMessage("Sėkmingai išsiųsti!");
    }
  };

  return (
    <div className={`${styles["contact-form"]}  container`}>
      <div className={styles.contact_content}>
        <h1>
          Sveiki atvykę į <span>Training Calendar</span>
        </h1>
        <h2>Susisiekite su mumis</h2>
        <p>
          Jei turite atsiliepimų ar klausimų apie mūsų svetainę arba mūsų
          paslaugas apskritai, susisiekite su mumis užpildydami formą.
        </p>
      </div>
      <div data-aos="fade-down">
        <h3>Palikite mums savo informaciją</h3>
        <p>Jūsų vartotojo duomenys nebus skelbiami</p>
        <form>
          <input
            type="text"
            placeholder="Vardas"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Pavardė"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="email"
            placeholder="El. paštas"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            name=""
            placeholder="Pranešimas"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button onClick={(e) => formHandler(e)} type="submit">
            Pateikti
          </button>
          <p className={styles.error_message}>{errorMessage}</p>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
