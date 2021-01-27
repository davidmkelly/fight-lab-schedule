import React, { useState } from "react";

import styles from "./MobileNavigation.module.scss";

const MobileNavigation = () => {
  const [active, setActive] = useState(false);
  const backgroundStyles = [styles.background];
  const navStyles = [styles.nav];
  const linkStyles = [styles.link];

  const buttonClick = () => {
    console.log("triggered!");
    setActive(!active);
  };

  if (active) {
    backgroundStyles.push(styles.backgroundActive);
    navStyles.push(styles.navActive);
    linkStyles.push(styles.linkActive);
  }

  return (
    <div className={styles.mNav}>
      <div className={styles.button} onClick={buttonClick}>
        <span className={styles.icon}>&nbsp;</span>
      </div>
      <div className={backgroundStyles.join(" ")} />
      <nav className={navStyles.join(" ")}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a
              className={linkStyles.join(" ")}
              href={"https://thefightlabtx.com"}
            >
              Home
            </a>
          </li>
          <li className={styles.item}>
            <a className={linkStyles.join(" ")} href={"/"}>
              Schedule
            </a>
          </li>
          <li className={styles.item}>
            <a
              className={linkStyles.join(" ")}
              href={"https://thefightlabtx.com#instructors"}
            >
              Instructors
            </a>
          </li>
          <li className={styles.item}>
            <a
              className={linkStyles.join(" ")}
              href={"https://thefightlabtx.com"}
            >
              Blog
            </a>
          </li>
          <li className={styles.item}>
            <a
                className={linkStyles.join(" ")}
                href={"https://app.thefightlabtx.com"}
            >
              App
            </a>
          </li>
          <li className={styles.item}>
            <a
                className={linkStyles.join(" ")}
                href={"https://contact.thefightlabtx.com"}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default MobileNavigation;
