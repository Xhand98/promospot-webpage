import React from "react";
import OfferComp from "./OfferComp";

import img1 from '/OffImgs/Detergente/1.jpg'


const OfferDisplay3 = () => {
  return (
    <div className="offcomp">
      <OfferComp
        imgSrc={img1}
        btnColor="red"
        offName={"Oxy"}
        offDetails={
          "Oferta válida del 06 de mayo al 25 de mayo o hasta agotar existencias. Los descuentos aplican únicamente a los productos seleccionados entiendas participantes de La Sirena."
        }
        disOne={
          "Oferta válida del 06 de mayo al 25 de mayo o hasta agotar existencias"
        }
        disTwo={
          "Los descuentos aplican únicamente a los productos seleccionados en tiendas participantes de la tienda."
        }
        disThree={
          "Sujeto a disponibilidad de productos en tienda"
        }
        disFour={"La oferta solo aplica a los productos identificados con etiquetas de oferta en las tiendas participantes de la tienda."}
        disFive={
          "Los productos en oferta no pueden ser cambiados por otros productos ni devueltos a menos que estén defectuosos"
        }
      />
    </div>
  );
};

export default OfferDisplay3;
