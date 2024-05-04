import react from "react";
import "./FarmStore.css";
import Product from "./ItemComp";
import img1 from "../assets/Paracetamol.jpg";
import img2 from "../assets/Loraora.jpg";
import img3 from "../assets/Eutriox.jpg";
import img4 from "../assets/Nolotil.jpg";
import img5 from "../assets/Adiro.jpg";
import img6 from "../assets/Ventonil.jpg";
import img7 from "../assets/Sintrom.jpg";
import img8 from "../assets/Ordifal.jpg";
import img9 from "../assets/Lexatin.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const FarmStore = () => {
  return (
    <div>
      <div class="icono">
        <Link to="/">
          {" "}
          <i class="fas fa-home">
            <FontAwesomeIcon icon={faHome} />
          </i>{" "}
        </Link>
      </div>

      <div class="farmacia">
        <h2>Apartado de productos de farmacia</h2>
      </div>
      <div class="container">
        <Product
          imgSrc={img1}
          productName="Paracetamol"
          precio="$10"
          oferta="Buy 1 Get 1 Free"
        />

        <Product
          imgSrc={img2}
          productName="Loratadina"
          precio="$10"
          oferta="Buy 1 Get 1 Free"
        />
        <Product
          imgSrc={img3}
          productName="Eutriox"
          precio="$10"
          oferta="Buy 1 Get 1 Free"
        />

        <Product
          imgSrc={img4}
          productName="Nolotil"
          precio="$10"
          oferta="Buy 1 Get 1 Free"
        />

        <Product
          imgSrc={img5}
          productName="Adiro"
          precio="$10"
          oferta="Buy 1 Get 1 Free"
        />

        <Product
          imgSrc={img6}
          productName="Ventonil"
          precio="$10"
          oferta="Buy 1 Get 1 Free"
        />

        <Product
          imgSrc={img7}
          productName="Sintrom"
          precio="$10"
          oferta="Buy 1 Get 1 Free"
        />

        <Product
          imgSrc={img8}
          productName="Ordifal"
          precio="$10"
          oferta="Buy 1 Get 1 Free"
        />

        <Product 
          imgSrc={img9}
          productName="Lexatin"
          precio="$10"
          oferta="Buy 1 Get 1 Free"
        />
      </div>
    </div>
  );
};

export default FarmStore;
