import React from "react";

import styles from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <svg className={styles.icon}>
        <use xlinkHref="/icons.svg#icon-logo-2"></use>
      </svg>
      <a className={styles.logo} href={"/"}>
        The Fight Lab TX
      </a>
      <a className={styles.link} href={"https://thefightlabtx.com"}>
        Home
      </a>
      <a className={[styles.link, styles.active].join(" ")} href={"/"}>
        Schedule
      </a>
      <a className={styles.link} href={"https://thefightlabtx.com#instructors"}>
        Instructors
      </a>
      <a className={styles.link} href={"https://thefightlabtx.com/blog"}>
        Blog
      </a>
      <a className={styles.link} href={"https://app.thefightlabtx.com"}>
        App
      </a>
      <a className={styles.link} href={"https://dev.thefightlabtx.com#contact"}>
        Contact
      </a>
    </nav>
  );
};

export default Navigation;
