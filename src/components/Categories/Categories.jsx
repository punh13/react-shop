import React, { useState, useEffect } from 'react';
import SingleCategory from './SingleCategory';
import styles from './categories.module.css';

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/categories')
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
        console.log(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={styles.container}>
      <h1>All Categories</h1>
      <ul className={styles.categories}>
        {categories.map((category) => (
          <SingleCategory key={category.id} category={category} />
        ))}
      </ul>
    </div>
  );
}
