import React from 'react';
import classes from './Input.module.css';

const input = props => {
  let inputElement = null;
  const inputClasses = [classes.InputElement];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.invalid);
  }

  if (props.touched) {
    inputClasses.push(classes.valid);
  }

  if (props.photo) {
    inputClasses.push(classes.photo);
  }

  switch (props.elementType) {
    case 'input':
      inputElement = (
        <input
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case 'textarea':
      inputClasses.push(classes.textarea);
      inputElement = (
        <textarea
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case 'select':
      inputElement = (
        <select
          className={classes.InputElement}
          value={props.value}
          onChange={props.changed}
          required=""
        >
          {props.elementConfig.options.map(option => {
            return (
              <option key={option.value} value={option.value}>
                {option.displayValue}
              </option>
            );
          })}{' '}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={classes.InputElement}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }

  let label = <label className={classes.Label}>{props.label}</label>;
  if (props.photo) {
    label = (
      <label htmlFor={'photo'} className={classes.photoLabel}>
        {props.label}
      </label>
    );
    inputElement = (
      <input
        className={inputClasses.join(' ')}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed}
        id={'photo'}
      />
    );
  }

  return (
    <div className={classes.Input}>
      {label}
      {inputElement}
    </div>
  );
};

export default input;
