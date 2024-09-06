import React from 'react';
import styles from './hero.module.css';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();
  return (
    <div className={styles.hero}>
      <h1>
        Choose from <span>best quality</span> products{' '}
      </h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro facere
        ad magnam eligendi omnis laboriosam molestias vitae dolorem, earum
        consectetur vero voluptate minus ut magni, quasi, accusamus ducimus odit
        iusto.
      </p>
      <div>
        <button
          className={styles.highlight}
          onClick={() => navigate('/allproducts')}
        >
          Start Shopping
        </button>
      </div>
      <div>
        <button
          className={styles.learnMoreButton}
          onClick={() => navigate('/about')}
        >
          Learn More
        </button>
      </div>
    </div>
  );
}
