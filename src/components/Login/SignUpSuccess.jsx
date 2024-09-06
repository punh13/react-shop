import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.css';

export default function SignUpSuccess() {
  const navigate = useNavigate();

  return (
    <div className={styles.successContainer}>
      <h2>Sign Up Successful!</h2>
      <p>Your account has been created. Click below to log in.</p>
      <button className={styles.loginButton} onClick={() => navigate('/login')}>
        Go to Login
      </button>
    </div>
  );
}
