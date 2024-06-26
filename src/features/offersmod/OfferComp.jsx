import React from "react";
import "./Offers.css";

const OfferComp = ({
  imgSrc,
  offName,
  offDetails,
  disOne,
  disTwo,
  disThree,
  disFour,
  disFive,
  btnColor,
}) => {
  return (
    <article>
      <div className="mainpart">
          <img src={imgSrc} alt={offName} />
        <div className="offinfo">
          <p className="offdetailsz">{offDetails}</p>
          <ColorButton color={btnColor}>Información</ColorButton>
        </div>
      </div>
      <div className="secpart">
        <h3 className="divi">Condiciones</h3>
        <div className="divisor"></div>
        <ul className="dislist">
          <li>{disOne}</li>
          <li>{disTwo}</li>
          <li>{disThree}</li>
          <li>{disFour}</li>
          <li>{disFive}</li>
        </ul>
      </div>
    </article>
  );
};

export default OfferComp

export const ColorButton = ({ color, children }) => {
    return (
      <button className={`color-button ${color}`}>
        {children}
      </button>
    );
  }
