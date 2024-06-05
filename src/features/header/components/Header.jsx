import React, { Children } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faInstagram, faTiktok, } from "@fortawesome/free-brands-svg-icons";
import logo from "/logo1.png";
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
      <input type="checkbox" id="btn-nav" />
      {logo1}
      <h2 className="pageName">PromoSpot</h2>
      <div className="searchcont">
        <div className="iconcont">
          <SearchToggle />
          <Link to="https://www.youtube.com/@xhand9849">
            <i>
              <FontAwesomeIcon icon={faYoutube} />
            </i>
          </Link>
          <Link to="https://www.instagram.com/ItsEquimano/">
            <i>
              <FontAwesomeIcon icon={faInstagram} />
            </i>
          </Link>
          <Link to="https://www.tiktok.com/@xhand98">
            <i>
              <FontAwesomeIcon icon={faTiktok} />
            </i>
          </Link>
      {children}
        </div>
      </div>
    </header>
  );
};
export default Header;
