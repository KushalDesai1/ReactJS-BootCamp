import React from "react";
import NavBar from "./Navbar";
import HeroSection from "./HeroSection";
import Appsection from "./Appsection";
import CardSection from "./CardSection";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />

      <CardSection />
      <Appsection />
      <Footer />
    </div>
  );
};

export default App;
