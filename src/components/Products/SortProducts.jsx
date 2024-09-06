import React from 'react';
import styles from './products.module.css';

export default function SortProducts({ setSortOrder }) {
  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };
  return (
    <div className={styles.sortContainer}>
      <label htmlFor="sortPrice" className={styles.sortLabel}>
        Sort by Price:
      </label>
      <select
        onChange={handleSortChange}
        id="sortPrice"
        className={styles.sortSelect}
      >
        <option value="none">Select...</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>
    </div>
  );
}
