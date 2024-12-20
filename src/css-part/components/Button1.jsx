import React from 'react';
// import './Button1.css';
import styles from './Button1.module.css';

export default function Button1() {
  return (
    // <button className='button'>Button1</button>
    <button className={styles.button}>Button1</button>
  );
}
