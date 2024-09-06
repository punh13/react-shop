import React, { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import styles from '../Products/products.module.css';

export default function AddToCartBtn({
  product,
  showNotification,
  setShowNotification,
}) {
  const { addToCart } = useContext(CartContext);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleAddToCart = () => {
    addToCart(product);
    setShowNotification(true);

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const newTimeoutId = setTimeout(() => {
      setShowNotification(false);
    }, 2000);

    setTimeoutId(newTimeoutId);
  };

  return (
    <button className={styles.addToCartButton} onClick={handleAddToCart}>
      Add To Cart
    </button>
  );
}
