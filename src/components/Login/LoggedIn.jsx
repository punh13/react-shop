import React from 'react';
import styles from './login.module.css';
import { useNavigate } from 'react-router-dom';

export default function LoggedIn() {
  const navigate = useNavigate();

  return (
    <div className={styles.loggedInContainer}>
      <h2 className={styles.loggedInTitle}>You are logged in!</h2>
      <p className={styles.loggedInText}>
        Go to{' '}
        <span className={styles.loggedInLink} onClick={() => navigate('/')}>
          Home
        </span>
      </p>
      <p className={styles.loggedInText}>
        Go to{' '}
        <span
          className={styles.loggedInLink}
          onClick={() => navigate('/profile')}
        >
          Your Profile
        </span>
      </p>
    </div>
  );
}
