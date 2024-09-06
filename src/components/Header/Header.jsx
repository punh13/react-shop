import React, { useContext, useState } from 'react';
import styles from './header.module.css';
import MobileNav from './MobileNav';
import { useNavigate } from 'react-router-dom';
import CartIcon from '../Cart/CartIcon';
import AuthContext from '../../Context/AuthContext';

export default function Header() {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);

  const toggleMenu = () => {
    setClicked(!clicked);
  };

  return (
    <header>
      <nav className={styles.navbar}>
        <div onClick={toggleMenu} className={styles.menuBtn}>
          {clicked ? (
            <i className="fa-solid fa-x"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </div>

        <h3 className={styles.logo} onClick={() => navigate('/')}>
          ReactShop
        </h3>

        {clicked ? <MobileNav toggleMenu={toggleMenu} /> : ''}

        <ul className={styles.desktopShow}>
          <li onClick={() => navigate('/')}>Home</li>
          <li onClick={() => navigate('/allproducts')}>Products</li>
          <li onClick={() => navigate('/about')}>About</li>
        </ul>
        <ul className={styles.mobileNavBarItems}>
          <li
            className={styles.account}
            onClick={() => navigate(auth.accessToken ? '/profile' : '/login')}
          >
            Account
          </li>

          <CartIcon />
        </ul>
      </nav>
    </header>
  );
}
