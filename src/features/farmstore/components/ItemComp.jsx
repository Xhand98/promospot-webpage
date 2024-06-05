import React from 'react';

const Product = ({ imgSrc, productName, precio, oferta, farmLink }) => {
  return (
    <div className="productos">
      <figure>
        <img src={imgSrc} alt={productName} />
      </figure>
      <a href={farmLink}>
      <div className="contenido">
        <h3>{productName}</h3>
        <br />
        <br />
      </div>
    </a>
    </div>
  );
};

export default Product;
