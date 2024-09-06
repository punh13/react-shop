import React from 'react';
import styles from './header.module.css';
import { useNavigate } from 'react-router-dom';

export default function MobileNav({ toggleMenu }) {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    toggleMenu();
  };

  return (
    <ul className={styles.mobileNav}>
      <li onClick={() => handleNavigation('/')}>Home</li>
      <li onClick={() => handleNavigation('/allproducts')}>Products</li>
      <li onClick={() => handleNavigation('/about')}>About</li>
    </ul>
  );
}
