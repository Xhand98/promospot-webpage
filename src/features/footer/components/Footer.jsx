import React from 'react';
import './footer.css';
import logo from '/logo.png';
import { Link } from 'react-router-dom';
    

const Footer = () => {
    return (
        <footer>
            <div className="lastCont">
                <img src={logo} className='logo'/>
                <h2 className='compName'>PromoSpot</h2> 
            </div>
            <div className="espacio"></div>
            <div className="informacion">
                <details>
                    <summary>
                        <h4>¿QUIÉNES SOMOS?</h4>
                    </summary>
                    <p>Nuestra empresa</p>
                    <p>Nuestra Historia</p>
                </details>
            </div>
            <div className="ayuda">
                <details>
                    <summary>
                        <h4>¿NECESITAS AYUDA?</h4>
                    </summary>
                    <p>Preguntas Frecuentes</p>
                    <p>Mapa del sitio</p>
                </details>
            </div>
            <div className="otros">
                <details>
                    <summary>
                        <h4>OTROS</h4>
                    </summary>
                    <p>Condiciones de uso</p>
                    <p>Politica de Privacidad</p>
                    <p>Politica de cookies</p>
                </details>
            </div>
            <ul>
                <li><p>PromoSpot <sup>__</sup> 2024 <sup>__</sup> <Link to='/Copyright'>Copyright {String.fromCodePoint(169)}</Link>  all rights reserved</p></li> 
                <li><p> <Link to='/farm'>Link temporal </Link></p></li> 
            <div className="espacio1"></div>
            </ul>
        </footer>

    );
};
export default Footer;
