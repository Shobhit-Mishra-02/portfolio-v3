import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import ProjectSection from "./components/ProjectSection";
import SkillSection from "./components/SkillSection";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div>
      <div className="container default-font">
        <Navigation />
        <Header />
        <AboutSection />
        <ProjectSection />
        <SkillSection />
        <Testimonial />
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
