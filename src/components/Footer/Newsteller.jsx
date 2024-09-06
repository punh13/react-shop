import React from 'react';
import styles from './footer.module.css';

export default function Newsteller() {
  return (
    <form className={styles.footerForm}>
      <input
        className={styles.footerInput}
        type="email"
        placeholder="Your email"
      />
      <button className={styles.footerButton}>Subscribe</button>
    </form>
  );
}
