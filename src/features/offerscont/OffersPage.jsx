import React from 'react'
import OffersCont from './OffersCont.jsx';

import img1 from './assets/image0.png'
import img2 from './assets/image1.png'
import img3 from './assets/image2.png'

const OffersPage = () => {
    return(
        <div className='off-page'>
            <OffersCont
            imgSrc={img1}
            imgAlt={"SAD"}
            />
            <OffersCont
            imgSrc={img2}
            imgAlt={"SAD"}
            />
            <OffersCont
            imgSrc={img3}
            imgAlt={"SAD"}
            />
        </div>
    )    
}

export default OffersPage