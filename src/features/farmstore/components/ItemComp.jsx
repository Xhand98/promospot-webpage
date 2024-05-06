import React from 'react';

const Product = ({ imgSrc, productName, precio, oferta }) => {
  return (
    <div className="productos">
      <figure>
        <img src={imgSrc} alt={productName} />
      </figure>
      <div className="contenido">
        <h3>{productName}</h3>
        <br />
        <p>Precio: {precio}</p>
        <br />
        <p>Oferta: {oferta}</p>
      </div>
    </div>
  );
};

export default Product;
