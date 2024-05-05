import React, { Children } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faInstagram, faFacebook, } from "@fortawesome/free-brands-svg-icons";
import logo from "/logo.png";
import SearchToggle from './SearchToggle'



const Header = ({children}) => {
 

  var logo1 = (
    <img
      src={logo}
      alt="Canvas Logo"
      className="logo"
    />
  );

  return (
    <header className="main-header">
      <Link to='/'>
      <label htmlFor="btn-nav" className="btn-nav">
        <FontAwesomeIcon icon={faHome} /> 
      </label>
      </Link>
      <input type="checkbox" id="btn-nav" />
      {logo1}
      <h2 className="pageName">PromoSpot</h2>

      

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
      {children}
        </div>
      </div>
    </header>
  );
};
export default Header;
