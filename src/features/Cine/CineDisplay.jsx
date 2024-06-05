import React from 'react'
import './Cine.css'
import img1 from './assets/caribean cinemas.png'
import img2 from './assets/Palacio-del-Cine.jpg'

const CineDisplay = () => {
    return(
        <article>
            
    <div className="cine">
        <h1>Cines</h1>
    </div>
    <div className="container">
        <div id="0" className="productos">
            <figure>
                <img src={img1} alt="" />
            </figure>
            <div className="contenido">
                <h3>Caribbean Cinemas</h3>
                <br />
                <a href="https://caribbeancinemas.com/es/location/republica-dominicana/">Ver</a>
            </div>
        </div>
        <div className="productos">
            <figure>
                <img src={img2} alt="" />
            </figure>
            <div className="contenido">
                <h3>Palacio del cine</h3>
                <br />
            <a href="https://palaciodelcine.com.do" target="_blank" className="">
                Ver
                </a>
            </div>
        </div>
    </div>

        </article>
    )
}

export default CineDisplay