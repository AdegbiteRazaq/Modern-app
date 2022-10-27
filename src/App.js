// import { useState } from "react";
import AboutContent from "./About Us/AboutContent";
import AboutHeader from "./About Us/AboutHeader";
import "./App.css";
import BusinessHeader from "./Business/BusinessHeader";
import BusinessMain from "./Business/BusinessMain";
import Footer from "./Footer/Footer";
import "./index.css";
import Logo from "./Logos/Logo";
import Header from "./Nav/Header";
import Nav from "./Nav/Nav";
import Trial from "./Trial/Trial";

function App() {
  return (
    <div>
      <Nav />
      <div className="section">
        <Header />
        <div className="section-add">
          <BusinessHeader />
          <BusinessMain />
          <div id="#about">
            <AboutHeader />
            <AboutContent />
          </div>
          <Logo />
          <Trial />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
