import React from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";

function App() {
  return (
    <div className="container default-font">
      <Navigation />
      <Header />
      <AboutSection />
      <ProjectSection />
    </div>
  );
}

export default App;
