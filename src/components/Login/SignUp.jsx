import React, { useState } from 'react';
import styles from './login.module.css';
import { useNavigate } from 'react-router-dom';
import SignUpSuccess from './SignUpSuccess';
import SignUpFailure from './SignUpFailure';

export default function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signUpStatus, setSignUpStatus] = useState(null);

  const clearInputs = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const avatar = 'https://picsum.photos/800';
    let user = { name, email, password, avatar };

    let response = await fetch('https://api.escuelajs.co/api/v1/users/', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
      },
    });

    if (response.status === 201) {
      const data = await response.json();
      setSignUpStatus(true);
    } else {
      setSignUpStatus(false);
    }
    clearInputs();
  };

  return (
    <>
      <div className={styles.loginContainer}>
        <form className={styles.loginForm}>
          <h2 className={styles.signUpTitle}>Sign Up</h2>
          <div className={styles.formGroup}>
            <label>Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className={styles.signUpButton} onClick={handleSignUp}>
            Sign Up
          </button>
          <button
            className={styles.loginButton}
            onClick={() => navigate('/login')}
          >
            Login
          </button>
        </form>

        {signUpStatus !== null && (
          <div className={styles.messageContainer}>
            {signUpStatus ? <SignUpSuccess /> : <SignUpFailure />}
          </div>
        )}
      </div>
    </>
  );
}
