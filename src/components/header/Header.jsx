import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { headerLinksData } from "../../values/values";

import styles from "./header.module.css";
import logo from "../../assets/Logo.svg";

const Header = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);

  const menuHandler = () => {
    setActive(!active);
  };

  const closeMenu = () => {
    setActive(false);
  };

  return (
    <header className={styles.header}>
      <div className={`container`}>
        <div className={`${styles.headerInner}`}>
          <div className={styles.logoHolder} onClick={() => navigate("/")}>
            <img src={logo} alt="Logo" />
          </div>
          <ul className={active ? styles.activeList : ""}>
            {headerLinksData.map((link) => (
              <li key={link.id} onClick={closeMenu}>
                <Link to={link.to}>{link.title}</Link>
              </li>
            ))}
          </ul>
          <div className={styles.menu} onClick={menuHandler}>
            <span className={styles.burgerIcon}>{active ? "✖" : "☰"}</span>
          </div>
          <div
            className={`${styles.menuOverlay} ${
              active ? styles.activeOverlay : ""
            }`}
            onClick={menuHandler}
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
