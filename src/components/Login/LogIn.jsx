import React, { useState, useContext } from 'react';
import styles from './login.module.css';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext';
import { useLocation } from 'react-router-dom';

export default function LogIn() {
  const navigate = useNavigate();
  const location = useLocation();
  const { setAuth } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    let user = { email, password };

    try {
      let response = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      let data = await response.json();

      if (response.ok) {
        const accessToken = data.access_token;
        localStorage.setItem('accessToken', accessToken);

        setAuth({ accessToken: accessToken });

        setSuccess(true);
        const from = location.state?.from || '/logged-in';
        navigate(from);
      } else {
        setErrMsg('Login failed. Please check your credentials.');
      }
    } catch (error) {
      setErrMsg('An error occurred. Please try again.');
    }

    clearInputs();
  };

  return (
    <div className={styles.loginContainer}>
      {errMsg && <p className={styles.errorMessage}>{errMsg}</p>}
      <form className={styles.loginForm} onSubmit={handleLogin}>
        <h2 className={styles.loginTitle}>Login</h2>
        <div className={styles.formGroup}>
          <label>Email</label>
          <input
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Password</label>
          <input
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button type="submit" className={styles.loginButton}>
          Login
        </button>
        <button
          className={styles.signUpButton}
          onClick={() => navigate('/signup')}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
