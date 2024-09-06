import React from 'react';

export default function NextPageBtn({ offset, setOffset, sortedProducts }) {
  const handleNextPageBtn = () => {
    setOffset((prevOffset) => {
      const newOffset = prevOffset + 10;
      const hasMoreProducts = sortedProducts.length === 10;
      return hasMoreProducts ? newOffset : prevOffset;
    });
  };

  return <button onClick={handleNextPageBtn}>→ </button>;
}
