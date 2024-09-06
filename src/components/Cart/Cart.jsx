import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import CartItemList from './CartItemList';
import styles from './cart.module.css';
import AuthContext from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const { cartItems } = useContext(CartContext);
  const { auth } = useContext(AuthContext);

  const navigate = useNavigate();

  return (
    <div className={styles.cartContainer}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className={styles.cart}>
          {cartItems.map((item) => (
            <CartItemList key={item.id} item={item} cartItems={cartItems} />
          ))}
          <p className={styles.subtotalAmount}>
            Subtotal: ${' '}
            {cartItems.reduce((total, item) => {
              return total + item.price * item.quantity;
            }, 0)}
          </p>

          <div className={styles.paymentButtonContainer}>
            <button
              className={styles.paymentButton}
              onClick={() =>
                navigate(auth.accessToken ? '/payment' : '/login', {
                  state: { from: '/payment' },
                })
              }
            >
              Click to Pay
            </button>
          </div>
        </ul>
      )}
    </div>
  );
}
