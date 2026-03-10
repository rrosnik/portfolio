import Hero from "./sections/Hero";
import LogoSection from "./sections/LogoSection";
import Navbar from "./sections/Navbar";
import ShowcaseSection from "./sections/ShowcaseSection";

const App = () => {
  return (
    <main>
      <>
        <Navbar />
        <Hero />
        <ShowcaseSection />
        <LogoSection />
      </>
    </main>
  );
};

export default App;
