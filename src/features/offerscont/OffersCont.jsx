import React from "react";
import "./OffersCont.css";
import { Link } from "react-router-dom";

const OffersCont = ({ imgSrc, imgAlt, linkRoute }) => {
  return (
    <div>
      <article>
        <img src={imgSrc} alt={imgAlt} className="offer-img" />
        <Link to={linkRoute}>
          {" "}
          <p className="offer-title">Ver Ofertas</p>{" "}
        </Link>
      </article>
    </div>
  );
};

export default OffersCont;
