import React from "react";
import { NavLink } from "react-router-dom";
import "../../../App.css"

const PageChoice = () => {
  return (
    <div className="pagechoice">
      <ul className="pagechoicecont">
        <li className=""><NavLink
          
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "activo" : ""
          }
        >
          Pagina Principal
        </NavLink></li>
        <li className=""><NavLink
          
          to="/farm"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "activo" : ""
          }
        >
          Farmacias
        </NavLink></li>
        <li className=""><NavLink
          
          to="/Cine"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "activo" : ""
          }
        >
          Cine
        </NavLink></li>
        <li className=""><NavLink
          
          to="/offers"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "activo" : ""
          }
        >
          SuperMercados
        </NavLink></li>
      </ul>
    </div>
  );
};

export default PageChoice;
