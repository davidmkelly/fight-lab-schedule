import React from 'react';

import classes from './Alert.module.css';

const Alert = props => {
  let classNames = [classes.Alert, classes[props.alertType]];

  return (
    <div role="alert" className={classNames.join(' ')}>
      {props.msg}
    </div>
  );
};

export default Alert;
