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
      <a className={styles.link} href={"/"}>
        Home
      </a>
      <a className={styles.link} href={"/"}>
        Schedule
      </a>
      <a className={styles.link} href={"/"}>
        Instructors
      </a>
      <a className={styles.link} href={"/"}>
        Blog
      </a>
      <a className={styles.link} href={"/"}>
        App
      </a>
    </nav>
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
//
//     .filler.none &nbsp;
//
// // LOGO
// svg.header__mLogo: use(xlink:href='/img/icons.svg#icon-logo-2')
//
// // NAVIGATION

export default Navigation;
