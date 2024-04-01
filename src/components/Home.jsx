import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Categories from "./Categories";
import Features from "./Features";
import HeroSection from "./HeroSection";
import Sales from "./Sales";
import Subscribe from "./Subscribe";
import Testimonials from "./Testimonials";
import Bestsellers from "./Bestsellers";
import UniqueSection from "./UniqueSection";
import WelcomeSection from "./WelcomeSection";

function Home() {
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

export default Home;
