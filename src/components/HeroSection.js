import BtnCTA from "../ui/BtnCTA";
import "./hero.css";

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__content flex-align">
        <img
          className="hero__img desktop"
          src="hero/hero_desktop.jpg"
          alt="Girl with apron"
        />
        <img
          className="hero__img mobile"
          src="hero/hero_mobile.jpg"
          alt="Girl with apron"
        />
        <div className="hero__textbox">
          <h1>We've got you covered!</h1>
          <p>
            Choose your stylish and functional aprons made from premium fabrics.
          </p>
          <BtnCTA>Shop now</BtnCTA>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
