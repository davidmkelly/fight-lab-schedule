import React from 'react';

import classes from './MobileNavigation.module.css';

const MobileNavigation = props => {
  const classNames = [classes.button];
  const iconClassNames = [classes.icon];

  if (props.open) {
    classNames.push(classes.open);
  } else {
  }

  return (
    <div className={classNames.join(' ')} onClick={props.clicked}>
      <span className={classes.icon}>&nbsp;</span>
    </div>
  );
};

export default MobileNavigation;
