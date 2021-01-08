import React, { useState, useEffect } from "react";

import classes from "./CalendarHeader.module.scss";

const weekArray = ["S", "M", "T", "W", "T", "F", "S"];

const CalendarHeader = (props) => {
  const month = props.date.toLocaleString("default", { month: "long" });

  const dateHeader = window.innerWidth >= 900 ? month : month.substring(0, 3);

  return (
    <>
      <div className={classes.CalendarHeader}>
        <svg
          className={classes.Icon}
          onClick={props.iconClicked}
          data-arrow={"left"}
        >
          <use xlinkHref={`/icons.svg#icon-arrow-left`}></use>
        </svg>
        <h3>{`${dateHeader} ${props.date.getFullYear()}`}</h3>
        <svg
          className={classes.Icon}
          onClick={props.iconClicked}
          data-arrow={"right"}
        >
          <use xlinkHref={`/icons.svg#icon-arrow-right`}></use>
        </svg>
      </div>
      <div className={classes.tableHeader}>
        {weekArray.map((el, i) => (
          <p key={i}>{el}</p>
        ))}
      </div>
    </>
  );
};

export default CalendarHeader;
