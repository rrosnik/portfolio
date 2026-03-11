import Experience from "./sections/Experience";
import FeatureCards from "./sections/FeatureCards";
import Hero from "./sections/Hero";
import LogoSection from "./sections/LogoSection";
import Navbar from "./sections/Navbar";
import ShowcaseSection from "./sections/ShowcaseSection";
import TechStack from "./sections/TechStack";

const App = () => {
  return (
    <main className="overflow-hidden">
      <>
        <Navbar />
        <Hero />
        <ShowcaseSection />
        <LogoSection />
        <FeatureCards />
        <Experience />
        <TechStack />
      </>
    </main>
  );
};

export default App;
