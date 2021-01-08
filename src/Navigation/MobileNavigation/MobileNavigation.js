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
              href={"https://dev.thefightlabtx.com"}
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
              href={"https://dev.thefightlabtx.com#instructors"}
            >
              Instructors
            </a>
          </li>
          <li className={styles.item}>
            <a
              className={linkStyles.join(" ")}
              href={"https://dev.thefightlabtx.com"}
            >
              Blog
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

// .m-navigation#m-nav
// input.m-navigation__checkbox#navi-toggle(type='checkbox')
// label.m-navigation__button(for='navi-toggle')
//     span.m-navigation__icon &nbsp;
// .m-navigation__background
// nav.m-navigation__nav
// ul.m-navigation__list.hidden
// li.m-navigation__item: a.m-navigation__link(href='/') Home
// li.m-navigation__item: a.m-navigation__link(href='/education') Schedule
// li.m-navigation__item: a.m-navigation__link(href='/news') Instructors
// li.m-navigation__item: a.m-navigation__link(href='/news') Blog
// li.m-navigation__item: a.m-navigation__link(href='https://app.thefightlabtx.com') App
export default MobileNavigation;
