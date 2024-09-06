import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.css';

export default function SignUpFailure() {
  return (
    <div className={styles.failureContainer}>
      <h2>Sign Up Failed</h2>
      <p>Something went wrong. Please try again.</p>
    </div>
  );
}
