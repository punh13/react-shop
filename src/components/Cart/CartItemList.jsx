import React, { useContext, useState, useEffect } from 'react';
import styles from './cart.module.css';
import { CartContext } from '../../Context/CartContext';

export default function CartItemList({ item }) {
  const { setCartItems } = useContext(CartContext);
  const [quantity, setQuantity] = useState(item.quantity);

  let allImages = item.images;
  let cleanImages = allImages.map((image) => image.replace(/[\[\]"]/g, ''));

  const handleRemoveBtn = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleQuantityIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  useEffect(() => {
    setCartItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity } : cartItem
      )
    );
  }, [quantity, item.id, setCartItems]);

  return (
    <li className={styles.cartItemList}>
      <img
        src={
          item.images && item.images.length > 0 ? cleanImages[0] : '/no-img.jpg'
        }
        alt={item.title}
      />
      <div>
        <h2 className={styles.title}>{item.title}</h2>
        <p>
          ${item.price} * {quantity}
        </p>
        <p>Total: ${item.price * quantity}</p>
      </div>

      <button
        className={styles.removeBtn}
        onClick={() => handleRemoveBtn(item.id)}
      >
        Remove
      </button>
      <div className={styles.quantityChange}>
        <button
          className={styles.quantityChangeBtns}
          onClick={handleQuantityDecrease}
        >
          -
        </button>
        <p className={styles.quantity}>{quantity}</p>
        <button
          className={styles.quantityChangeBtns}
          onClick={handleQuantityIncrease}
        >
          +
        </button>
      </div>
    </li>
  );
}
