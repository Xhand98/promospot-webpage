import React from "react";
import "./MainPage.css";
import img1 from '/1.png'
import img2 from '/2.png';
import ShowCase from "../../magazineshowcase/components/MagazineShowcase";

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
        <div className="Img">
          <img
            src={img1}
            className="carrito"
            alt="Carrito de compras"
          />
          <img
            src={img2}
            className="precio"
            alt="Etiqueta de precio"
          />
        </div>
        <ShowCase />

    </main>
  );
}

export default MainPage;