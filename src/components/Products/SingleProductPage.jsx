import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './products.module.css';
import AddToCartBtn from '../Buttons/AddToCartBtn';

export default function SingleProductPage() {
  const [showNotification, setShowNotification] = useState(false);
  const location = useLocation();
  const product = location.state?.product;
  const [singleProduct, setSingleProduct] = useState(product);
  const id = product?.id;

  let allImages = product.images;
  let cleanImages = allImages.map((image) => image.replace(/[\[\]"]/g, ''));

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setSingleProduct(data);
        console.log(data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className={styles.singleProductCard}>
      {showNotification && (
        <p className={styles.notification}>Successfully Added to Cart</p>
      )}
      <img src={cleanImages[0]} alt={singleProduct.title} />
      <h2>{singleProduct.title}</h2>
      <p>Price: ${singleProduct.price}</p>
      <p>{singleProduct.description}</p>
      <AddToCartBtn
        product={product}
        showNotification={showNotification}
        setShowNotification={setShowNotification}
      />
    </div>
  );
}
