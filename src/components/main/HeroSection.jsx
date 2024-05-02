import React from "react";
import styles from "./home.module.css";

import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaGithub,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className={styles["hero-section"]} data-aos="zoom-out-down">
      <h1 className="main-heading">PRADĖK SPORTUOTI</h1>
      <p>Sveikata ir džiaugsmas – kiekvieno sporto žingsnio rezultatas.</p>
      <div>
        <Link
          to="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles["icon-link"]}
        >
          <FaFacebookSquare />
        </Link>
        <Link
          to="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles["icon-link"]}
        >
          <FaGithub />
        </Link>
        <Link
          to="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles["icon-link"]}
        >
          <FaInstagram />
        </Link>
        <Link
          to="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles["icon-link"]}
        >
          <FaTwitterSquare />
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
