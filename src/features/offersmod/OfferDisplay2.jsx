import React from "react";
import OfferComp from "./OfferComp";

import img1 from "../offerscont/assets/image2.png";

const OfferDisplay2 = () => {
  return (
    <div className="offcomp">
      <OfferComp
        imgSrc={img1}
        btnColor="green"
        offName={"BECENSE"}
        offDetails={
          "Aproveche el 50% aplicado a todos nuestros productos enlatados de segunda compra| Supermercados Bravo Ta’ Dando Lata con esta oferta, no se la pierda| Disponible desde el 29 de Abril y todo el mes de Mayo."
        }
        disOne={
          "ANTES DE REALIZAR LA COMPRA, LLAMAR AL TEL: 829-598-1500 PARA VALIDAR DISPONIBILIDAD DE LA FECHA DESEADA"
        }
        disTwo={
          "OFERTA VÁLIDA ÚNICAMENTE PARA UNO DE LOS FINES DE SEMANA DEL 03 AL 05, 10 AL 12, 17 AL 19 Y 24 AL 26 DE MAYO Y DEL 07 AL 09 DE JUNIO 2024"
        }
        disThree={
          "La oferta incluye una estadía de 3 días y 2 noches con todo incluido para 2 adultos y un niño hasta los 12 años en una habitación Deluxe Tropical, este hotel cuenta con: Playa privada, 4 piscinas, 12 bares 10 restaurantes, bar en la piscina, bar en la playa, coffe shop, pizzería, parque acuático, servicio a la habitación con horario limitado, snack bar, spa de servicio (costo adicional), club Infantil, gym, discoteca, amplias actividades para niños y adultos, espectáculos de música en vivo, wifi gratis y parque gratuito en el Hotel Sunscape Dominicus | La Romana por solo RD$31,599"
        }
        disFour={"Compra los que quieras"}
        disFive={
          "El cupón de descuento será enviado a tu cuenta de Megusta!do."
        }
      />
    </div>
  );
};

export default OfferDisplay2;
