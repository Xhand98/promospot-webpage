import { Routes, Route } from "react-router-dom";
import HomePage from "../features/pagestructure/Homepage.jsx";
import Showcase from "../features/magazineshowcase/components/MagazineShowcase.jsx";
import CopyrightToggler from "../features/copyright/components/CopyrightToggler.jsx";
import CoolModal from "../features/modal/Modal.jsx";
import FarmStore  from '../features/farmstore/components/FarmStore.jsx';
import Chatbot from "../features/chatbot/components/Chatbot.jsx";
import OffersPage from "../features/offerscont/OffersPage.jsx";


function Routing() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/mag" element={<Showcase />} />
      <Route path="/Copyright" element={<CopyrightToggler />} />
      <Route path="/modal" element={<CoolModal />} />
      <Route path="/farm" element={<FarmStore />} />
      <Route path="/cb" element={<Chatbot />} />
      <Route path="/offer" element={<OffersPage />} />
    </Routes>
  );
}

export default Routing;
