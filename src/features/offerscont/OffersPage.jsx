import React from 'react'
import OffersCont from './OffersCont.jsx';
import './OffersPage.css'

import img1 from './assets/image0.png'
import img2 from './assets/image1.png'
import img3 from './assets/image2.png'
import img4 from '/OffImgs/Detergente/1.jpg'
import img5 from '/OffImgs/Detergente/2.jpg'
import img6 from '/OffImgs/Detergente/3.jpg'
import img7 from '/OffImgs/Ejercicio/4.jpg'
import img8 from '/OffImgs/Helado/5.jpg'
import img9 from '/OffImgs/Maquillaje/6.jpg'
import img10 from '/OffImgs/Pintura/7.jpg'
import img11 from '/OffImgs/platos/8.jpg'
import img12 from '/OffImgs/cabeza/9.jpg'

const OffersPage = () => {
    return(
        <div className='off-page'>
            <div className='off-items'>
            <OffersCont
            className="off-item"
            linkRoute={"/offers/Sirena"}
            imgSrc={img1}
            imgAlt={"Anuncio la Sirena"}
            />
            <OffersCont
            className="off-item"
            linkRoute={"/offers/BECENSE"}
            imgSrc={img2}
            imgAlt={"Anuncio el Nacional"}
            />
            <OffersCont
            className="off-item"
            linkRoute={"/offers/Bravo"}
            imgSrc={img3}
            imgAlt={"Anuncio Bravo"}
            />
            <OffersCont
            className="off-item"
            linkRoute={"/offers/Oxy"}
            imgSrc={img4}
            imgAlt={"Anuncio Bravo"}
            />
            <OffersCont
            className="off-item"
            linkRoute={"/offers/Bravo"}
            imgSrc={img5}
            imgAlt={"Anuncio Bravo"}
            />
            <OffersCont
            className="off-item"
            linkRoute={"/offers/Bravo"}
            imgSrc={img6}
            imgAlt={"Anuncio Bravo"}
            />
            <OffersCont
            className="off-item"
            linkRoute={"/offers/Bravo"}
            imgSrc={img7}
            imgAlt={"Anuncio Bravo"}
            />
            <OffersCont
            className="off-item"
            linkRoute={"/offers/Bravo"}
            imgSrc={img8}
            imgAlt={"Anuncio Bravo"}
            />
            <OffersCont
            className="off-item"
            linkRoute={"/offers/Bravo"}
            imgSrc={img9}
            imgAlt={"Anuncio Bravo"}
            />
            <OffersCont
            className="off-item"
            linkRoute={"/offers/Bravo"}
            imgSrc={img10}
            imgAlt={"Anuncio Bravo"}
            />
            <OffersCont
            className="off-item"
            linkRoute={"/offers/Bravo"}
            imgSrc={img11}
            imgAlt={"Anuncio Bravo"}
            />
            <OffersCont
            className="off-item"
            linkRoute={"/offers/Bravo"}
            imgSrc={img12}
            imgAlt={"Anuncio Bravo"}
            />
            </div>
        </div>
    )    
}

export default OffersPage