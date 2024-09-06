import React, { useState, useEffect } from 'react';
import styles from './products.module.css';

export default function SearchProducts({ setSearchTerm }) {
  return (
    <form
      className={styles.form}
      onSubmit={(e) => handleSubmit(e.preventDefault())}
    >
      <input
        className={styles.input}
        type="text"
        placeholder="Search product..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </form>
  );
}
