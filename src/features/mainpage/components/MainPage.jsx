import React, { useEffect, useState } from "react";
import "./MainPage.css";
import img1 from '../assets/3.png';
import img2 from '../assets/2.png';
import img3 from '../assets/1.png';

function MainPage() {
  const [user, setUser] = useState(localStorage.getItem('user') || '');

  useEffect(() => {
    const cachedUser = localStorage.getItem('user');
    if (!cachedUser) {
      const userInput = prompt("Ingrese su usuario:");
      if (userInput) {
        localStorage.setItem('user', userInput);
        setUser(userInput);
      }
    }
  }, []);

  useEffect(() => {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', 'Enter'];
    let index = 0;

    function keyHandler(event) {
      if (event.key === konamiCode[index]) {
        index++;
        if (index === konamiCode.length) {
          // Konami code entered, delete cached user
          localStorage.removeItem('user');
          setUser('');
          alert('Konami code detected. Cached user deleted.');
          index = 0; // Reset index for next Konami code entry
        }
      } else {
        index = 0; // Reset index if key doesn't match sequence
      }
    }

    window.addEventListener('keydown', keyHandler);

    return () => {
      window.removeEventListener('keydown', keyHandler);
    };
  }, []);

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
