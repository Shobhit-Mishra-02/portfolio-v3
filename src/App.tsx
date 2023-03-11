import React from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";

function App() {
  return (
    <div className="container default-font">
      <Navigation />
      <Header />
      <AboutSection />
    </div>
  );
}

export default App;
