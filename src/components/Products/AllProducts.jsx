import React from 'react';
import { useState, useEffect } from 'react';
import SingleProdItem from './SingleProdItem';
import styles from './products.module.css';
import SearchProducts from './SearchProducts';
import PrevPageBtn from '../Buttons/PrevPageBtn';
import NextPageBtn from '../Buttons/NextPageBtn';
import SortProducts from './SortProducts';

export default function AllProducts() {
  const [allProducts, setAllProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortedProducts, setSortedProducts] = useState(allProducts);
  const [sortOrder, setSortOrder] = useState('none');
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const url = searchTerm
      ? `https://api.escuelajs.co/api/v1/products/?title=${searchTerm}`
      : `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=10`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setAllProducts(data);
        console.log(data);
      })
      .catch((err) => console.error(err));
  }, [searchTerm, offset]);

  useEffect(() => {
    const sortProducts = (order) => {
      const sorted = [...allProducts].sort((a, b) => {
        if (order === 'asc') {
          return a.price - b.price;
        } else if (order === 'desc') {
          return b.price - a.price;
        } else {
          return 0;
        }
      });
      setSortedProducts(sorted);
      setSortOrder(order);
    };

    sortProducts(sortOrder);
  }, [allProducts, sortOrder]);

  return (
    <div className={styles.productsContainer}>
      <div className={styles.searchBar}>
        <h1>All Products</h1>
        <SearchProducts setSearchTerm={setSearchTerm} />
        <SortProducts setSortOrder={setSortOrder} />
      </div>
      <ul className={styles.productsGrid}>
        {sortedProducts.map((product) => (
          <SingleProdItem key={product.id} product={product} />
        ))}
      </ul>
      <div className={styles.paginationBtns}>
        <PrevPageBtn
          offset={offset}
          setOffset={setOffset}
          sortedProducts={sortedProducts}
        />
        <NextPageBtn
          offset={offset}
          setOffset={setOffset}
          sortedProducts={sortedProducts}
        />
      </div>
    </div>
  );
}
