import { Routes, Route } from "react-router-dom";
import HomePage from "../features/pagestructure/Homepage.jsx";
import CopyrightToggler from "../features/copyright/components/CopyrightToggler.jsx";
import CoolModal from "../features/modal/Modal.jsx";
import FarmStore from "../features/farmstore/components/FarmStore.jsx";
import Chatbot from "../features/chatbot/components/Chatbot.jsx";
import OffersPage from "../features/offerscont/OffersPage.jsx";
import Header from '../features/header/components/Header'
import PageChoice from '../features/mainpage/components/PageChoice';
import Footer from '../features/footer/components/Footer'
import OfferDisplay1 from "../features/offersmod/OfferDisplay1.jsx";
import OfferDisplay2 from "../features/offersmod/OfferDisplay2.jsx";
import OfferDisplay3 from "../features/offersmod/OfferDisplay3.jsx";
import OfferDisplay4 from "../features/offersmod/OfferDisplay4.jsx";
import CineDisplay from "../features/Cine/CineDisplay.jsx";

function Routing() {
  return (
    <div>
      <Header >
      <PageChoice />
      </Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/offers" element={<OffersPage />} />
        <Route path="/Copyright" element={<CopyrightToggler />} />
        <Route path="/modal" element={<CoolModal />} />
        <Route path="/farm" element={<FarmStore />} />
        <Route path="/cb" element={<Chatbot />} />
        <Route path="/Cine" element={<CineDisplay />} />
        <Route path="/offers/BECENSE" element={<OfferDisplay1 />} />
        <Route path="/offers/Bravo" element={<OfferDisplay2 />} />
        <Route path="/offers/Sirena" element={<OfferDisplay3 />} />
        <Route path="/offers/Oxy" element={<OfferDisplay4 />} />
        <Route path="/prueba" element={<div></div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Routing;
