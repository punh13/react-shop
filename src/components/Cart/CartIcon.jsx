import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import { useContext, useState } from 'react';
import styles from './cart.module.css';

export default function CartIcon() {
  const navigate = useNavigate();

  const { cartItems } = useContext(CartContext);

  return (
    <div className={styles.cartIcon} onClick={() => navigate('/cart')}>
      Cart({cartItems.length})
    </div>
  );
}
