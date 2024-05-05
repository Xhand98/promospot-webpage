import React from 'react'
import OffersCont from './OffersCont.jsx';
import './OffersPage.css'

import img1 from './assets/image0.png'
import img2 from './assets/image1.png'
import img3 from './assets/image2.png'

const OffersPage = () => {
    return(
        <div className='off-page'>
            <OffersCont
            linkRoute={"/offers/Sirena"}
            imgSrc={img1}
            imgAlt={"Anuncio la Sirena"}
            />
            <OffersCont
            linkRoute={"/offers/BECENSE"}
            imgSrc={img2}
            imgAlt={"Anuncio el Nacional"}
            />
            <OffersCont
            linkRoute={"/offers/Bravo"}
            imgSrc={img3}
            imgAlt={"Anuncio Bravo"}
            />
        </div>
    )    
}

export default OffersPage