import React from "react";

import classes from "./Modal.module.scss";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => {
  return (
    <>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show
            ? "translate(-50%, -50%)"
            : "translateY(-130vh)",
          opacity: props.show ? "1" : "0",
          borderRadius: "5px",
        }}
      >
        {props.children}
      </div>
    </>
  );
};

export default Modal;
