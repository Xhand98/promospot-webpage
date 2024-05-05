import React from "react";
import "./MainPage.css";
import img1 from '../assets/3.png';
import img2 from '../assets/2.png';
import img3 from '../assets/1.png';
import ShowCase from "../../magazineshowcase/components/MagazineShowcase";

import PageChoice from './PageChoice'

let user = prompt("Ingrese su usuario:");



function MainPage() {
  return (
    <main>
      <div className="parrafo">
        <h1>
          ¡Bienvenido a nuestro sitio {user}!
        </h1>

        <p>
          ¡Disfruta de todas las ofertas y catálogos que tenemos disponible para ti! 
        </p>
        </div>
        <div className="grid-container">
          <img
            src={img1}
            className="carrito grid-item"
            alt="Carrito de compras"
          />
          <img
            src={img2}
            className="precio grid-item"
            alt="Etiqueta de precio"
          />
          <img
            src={img3}
            className="precio grid-item"
            alt="Etiqueta de precio"
          />
        </div>

    </main>
  );
}

export default MainPage;