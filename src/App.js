import Main from "./ui/Main";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import HeroSection from "./components/HeroSection";
import WelcomeSection from "./components/WelcomeSection";
import Categories from "./components/Categories";
import UniqueSection from "./components/UniqueSection";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Bestsellers from "./components/Bestsellers";
import Sales from "./components/Sales";
import Subscribe from "./components/Subscribe";

import "./scss/style.scss";

function App() {
  return (
    <>
      <Header />
      <Main>
        <HeroSection />
        <WelcomeSection />
        <Categories />
        <UniqueSection />
        <Features />
        <Testimonials />
        <Bestsellers />
        <Sales />
        <Subscribe />
      </Main>
      <Footer />
    </>
  );
}

export default App;
