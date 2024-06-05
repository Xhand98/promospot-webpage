import react from 'react';
import "./FarmStore.css";
import Product from "./ItemComp";
import img1 from "../assets/IMG-20230605-WA0060.jpg";
import img2 from "../assets/naco-II.jpg";
import img3 from "../assets/37126f28-bbf7-41e9-96c2-95e946851083.jpg";
import img4 from "../assets/download (1).jpeg";
import img5 from "../assets/download (2).jpeg";
import img6 from "../assets/Farmacia-Carol.jpg";

const FarmStore = () => {
  return (
    <div>

      <div className="farmacia">
        <h2>Apartado Farmacias Destacadas</h2>
      </div>
      <div className="container">
        <Product
        farmLink={"https://farmaciamedicargbc.com/"}
          imgSrc={img1}
          productName="Farmacia GBC"

          
        />

        <Product
          imgSrc={img2}
          productName="Farma Extra"
          farmLink={"https://farmaextra.com/"}
          
        />
        <Product
          imgSrc={img3}
          productName="Farmacia el sol"
          farmLink={"https://www.farmaciaselsol.com/"}
          
        />

        <Product
          imgSrc={img4}
          productName="Pharmangel"
          farmLink={"https://pharmangel.com.do/web/index.html"}
          
        />

        <Product
          imgSrc={img5}
          productName="FarmaciasVip"
          farmLink={"https://farmaciasvip.com/HomeAlt"}
          
        />

        <Product
          imgSrc={img6}
          productName="Farmacia Carol"
          farmLink={"https://www.farmaciacarol.com/"}
          
        />
      </div>
    </div>
  );
};

export default FarmStore;
