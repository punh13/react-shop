import React from 'react';

export default function PrevPageBtn({ setOffset, offset }) {
  const handlePrevPageBtn = () => {
    setOffset((prevOffset) => {
      if (prevOffset <= 0) {
        return prevOffset;
      }
      return prevOffset - 10;
    });
  };

  return <button onClick={handlePrevPageBtn}>←</button>;
}
