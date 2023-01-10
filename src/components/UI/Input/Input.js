import React from 'react';
import styles from './input.module.css';

export default function Input(props) {
  return (
    <div className={`${styles.control} ${props.isValid === false ? styles.invalid : ''}`}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type || 'email'}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      {props.children}
    </div>
  );
}
