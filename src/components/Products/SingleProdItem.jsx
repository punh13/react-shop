import React from 'react';
import styles from './products.module.css';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import { useContext, useState } from 'react';
import AddToCartBtn from '../Buttons/AddToCartBtn';

export default function SingleProdItem({ product }) {
  const navigate = useNavigate();

  const [showNotification, setShowNotification] = useState(false);

  let allImages = product.images;
  let cleanImages = allImages.map((image) => image.replace(/[\[\]"]/g, ''));

  const loadSingleProduct = (id) => {
    navigate(`/products/${id}`, { state: { product } });
  };

  return (
    <>
      {showNotification && (
        <p className={styles.notification}>Successfully Added to Cart</p>
      )}

      <li className={styles.productCard}>
        <img
          src={
            product.images && product.images.length > 0
              ? cleanImages[0]
              : '/no-img.jpg'
          }
          alt=""
          className={styles.image}
        />
        <h2>{product.title}</h2>
        <p>Price: ${product.price}</p>
        <div className={styles.productBtns}>
          <button onClick={() => loadSingleProduct(product.id)}>
            View More
          </button>
          <AddToCartBtn
            product={product}
            showNotification={showNotification}
            setShowNotification={setShowNotification}
          />
        </div>
      </li>
    </>
  );
}
