import styles from "./footer.module.css";
import { useNavigate } from "react-router";
import footerLogo from "../../assets/Logo.svg";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.footer}>
      <div className={`${styles.footer_content} container `}>
        <div>
          <img src={footerLogo} alt="Footer Logo" />
        </div>
        <div>
          <h2>Informacija</h2>
          <ul>
            <li onClick={() => navigate("/plans")}>Treniruočių Planai</li>
            <li onClick={() => navigate("/food")}>Fitneso Maistas</li>
            <li onClick={() => navigate("/price")}>Kainos</li>
            <li onClick={() => navigate("/calendar")}>Kelendorius</li>
            <li onClick={() => navigate("/contact")}>Kontaktai</li>
          </ul>
        </div>
        <div>
          <h2>Kontaktai</h2>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2>Prisijunkite prie mūsų naujienlaiškio</h2>
          <form>
            <input type="email" placeholder="Jūsų el. paštas" required />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div class={styles.footer_copyright}>
        <p>2024 Edvin, Visos teisės saugomos</p>
      </div>
    </div>
  );
};

export default Footer;
