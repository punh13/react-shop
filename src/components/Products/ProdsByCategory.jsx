import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SingleProdItem from './SingleProdItem';
import styles from './products.module.css';
import PrevPageBtn from '../Buttons/PrevPageBtn';
import NextPageBtn from '../Buttons/NextPageBtn';

export default function ProdsByCategory() {
  const location = useLocation();
  const products = location.state?.products;

  return (
    <div className={styles.productsContainer}>
      <h1>{products.length > 0 && products[0].category.name}</h1>
      <ul className={styles.productsGrid}>
        {products.map((product) => (
          <SingleProdItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}
