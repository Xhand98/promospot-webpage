import React from "react";
import { NavLink } from "react-router-dom";

const PageChoice = () => {
  return (
    <div className="pagechoice">
      <ul>
        <li><NavLink
          
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "activo" : ""
          }
        >
          Pagina Principal
        </NavLink></li>
        <li><NavLink
          
          to="/farm"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "activo" : ""
          }
        >
          Farmacias
        </NavLink></li>
        <li><NavLink
          
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "activo" : ""
          }
        >
          Moda
        </NavLink></li>
        <li><NavLink
          
          to="/offers"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "activo" : ""
          }
        >
          Super
        </NavLink></li>
      </ul>
    </div>
  );
};

export default PageChoice;
