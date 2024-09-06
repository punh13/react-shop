import React from 'react';
import styles from './footer.module.css';
import Newsteller from './Newsteller';

export default function Footer() {
  return (
    <footer>
      <div>
        <Newsteller />
      </div>
      <div className={styles.footer}>
        <p>
          Made by <a href="">Punhan</a>
        </p>

        <a href="https://github.com/punh13">
          {' '}
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </footer>
  );
}
