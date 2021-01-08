import React from 'react';

import classes from './Button.module.css';

const Button = props => {
  return (
    <button
      disabled={props.disabled}
      className={[
        classes.Button,
        classes[props.btnType],
        classes[props.where],
      ].join(' ')}
      onClick={props.clicked}
      type={props.btnType === 'Danger' ? 'button' : null}
    >
      {props.children}
    </button>
  );
};

export default Button;
