import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './categories.module.css';

export default function SingleCategory({ category }) {
  const [CategoryProds, setCategoryProds] = useState([]);
  const navigate = useNavigate();
  const id = category.id;

  const loadCategoryProducts = (id) => {
    fetch(`https://api.escuelajs.co/api/v1/categories/${id}/products`)
      .then((respones) => respones.json())
      .then((data) => {
        setCategoryProds(data);
        console.log(data);
        navigate(`/category/${id}/products`, { state: { products: data } });
      })
      .catch((err) => console.error(err));

    console.log(id);
  };
  return (
    <li
      className={styles.singleCategory}
      onClick={() => loadCategoryProducts(id)}
    >
      <div className={styles.categoryCard}>
        <h2>{category.name}</h2>
        <img className={styles.image} src={category.image} alt="" />
      </div>
    </li>
  );
}
