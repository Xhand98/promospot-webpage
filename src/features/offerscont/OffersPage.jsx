import React from 'react'
import OffersCont from './OffersCont.jsx';

import img1 from './assets/image0.png'
import img2 from './assets/image1.png'
import img3 from './assets/image2.png'

const OffersPage = () => {
    return(
        <div className='off-page'>
            <OffersCont
            linkRoute={"/"}
            imgSrc={img1}
            imgAlt={"Anuncio la Sirena"}
            />
            <OffersCont
            linkRoute={"/"}
            imgSrc={img2}
            imgAlt={"Anuncio el Nacional"}
            />
            <OffersCont
            linkRoute={"/"}
            imgSrc={img3}
            imgAlt={"Anuncio Bravo"}
            />
        </div>
    )    
}

export default OffersPage