import React from "react";
import "./homepage.css";
import { Sidetab } from '@typeform/embed-react'
import ChatbotToggler from "../chatbot/components/ChatbotToggler.jsx";
import MainPage from "../mainpage/components/MainPage.jsx";
import Showcase from '../magazineshowcase/components/MagazineShowcase'

function HomePage() {
  return (
    <div className="mainPage">
      <MainPage />
      <Sidetab id="neNTaGfQ" buttonText="click to open" />
      <Showcase />
      <ChatbotToggler />
    </div>
  );
}

export default HomePage;
