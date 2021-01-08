import classes from "./EditDeleteIcon.module.css";
import React from "react";

const EditIcon = (props) => {
  const iconSize = { height: props.height, width: props.width };

  return (
    <svg style={iconSize} className={classes.Icon} onClick={props.clickedIcon}>
      <use xlinkHref={`/img/icons.svg#icon-edit`}></use>
    </svg>
  );
};

export default EditIcon;
