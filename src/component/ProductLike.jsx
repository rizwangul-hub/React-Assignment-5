import React, { useState } from "react";

const ProductLike = ({ name }) => {
  const [like, setLike] = useState(0);

  return (
    <div className="like-container">
      <div className="likeName">{name}</div>
      <div >
        <span className="like-button" onClick={() => setLike(like + 1)}>❤️ Like </span>
        <span className="like-count">:{like}</span>
      </div>
    </div>
  );
};

export default ProductLike;
