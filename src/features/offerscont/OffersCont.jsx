import React from "react";
import "./OffersCont.css";
import { Link } from "react-router-dom";

const OffersCont = ({ imgSrc, imgAlt, linkRoute }) => {
  return (
    <div>
      <Link to={linkRoute} target="_blank">
        <article>
          <img src={imgSrc} alt={imgAlt} className="offer-img" />{" "}
          <p className="offer-title">Ver Ofertas</p>{" "}
        </article>
      </Link>
    </div>
  );
};

export default OffersCont;
