import AboutSection from "./components/AboutSection";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import ProjectSection from "./components/ProjectSection";
import SkillSection from "./components/SkillSection";

function App() {
  return (
    <div className="container default-font">
      <Navigation />
      <Header />
      <AboutSection />
      <ProjectSection />
      <SkillSection />
    </div>
  );
}

export default App;
