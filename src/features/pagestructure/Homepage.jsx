import React from "react";
import "./homepage.css";
import { Sidetab } from '@typeform/embed-react'
import Footer from "../footer/components/Footer.jsx";
import ChatbotToggler from "../chatbot/components/ChatbotToggler.jsx";
import Header from "../header/components/Header.jsx";
import MainPage from "../mainpage/components/MainPage.jsx";

function HomePage() {
  return (
    <div className="mainPage">
      <Header />
      <MainPage />
      <Sidetab id="neNTaGfQ" buttonText="click to open" />
      <Footer />
      <ChatbotToggler />
    </div>
  );
}

export default HomePage;
