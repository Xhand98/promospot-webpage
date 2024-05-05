import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faInstagram, faFacebook, } from "@fortawesome/free-brands-svg-icons";
import logo from "/logo.png";
import SearchToggle from './SearchToggle'



const Footer = () => {
 

  var logo1 = (
    <img
      //src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg"
      src={logo}
      alt="Canvas Logo"
      className="logo"
    />
  );

  return (
    <header className="main-header">
      <label htmlFor="btn-nav" className="btn-nav">
        <FontAwesomeIcon icon={faBars} />
      </label>
      <input type="checkbox" id="btn-nav" />
      {logo1}
      <h2 className="pageName">PromoSpot</h2>

      <nav className="navigation">
        <ul className="menu">
          <li className="Loterias">
            <a href="#">
              <Link to="/farm">Loterias</Link>
            </a>
            <ul className="submenu uno">
              <li className="li Leidsa">Leidsa</li>

              <li>Lotoreal</li>

              <li>Loteka</li>
            </ul>
          </li>
          <li className="Farmacias dos">
            <a href="#">Farmacias</a>
            <ul className="submenu">
              <li>Carol</li>
              <li>Hidalgo</li>
            </ul>
          </li>
          <li className="Supermercados tres">
            <a href="#">Supermercados</a>
            <ul className="submenu">
              <li>Bravo</li>

              <li>Olé</li>

              <li>Sirena</li>

              <li>Nacional</li>

              <li>Jumbo</li>

              <li>SuperPola</li>
            </ul>
          </li>
        </ul>
      </nav>

      <div className="searchcont">
        <div className="iconcont">
          <SearchToggle />
          <a href="">
            <i>
              <FontAwesomeIcon icon={faYoutube} />
            </i>
          </a>
          <a href="">
            <i>
              <FontAwesomeIcon icon={faInstagram} />
            </i>
          </a>
          <a href="">
            <i>
              <FontAwesomeIcon icon={faFacebook} />
            </i>
          </a>
        </div>
      </div>
    </header>
  );
};
export default Footer;
