import BtnCTA from "../ui/BtnCTA";
import "./unique.css";

function UniqueSection() {
  return (
    <section className="unique">
      <div className="unique__content centered flex-align">
        <img className="unique__img" src="unique/unique1.png" alt="Bag" />

        <div className="unique__textbox">
          <h2>Want something unique?</h2>
          <p>
            Make It Yours! Add a beautifully embroidered name, personal message
            or design. We provide personalization for absolutely any item in the
            shop. It can be a perfect gift idea for family and friends.
          </p>
          <BtnCTA>Learn more</BtnCTA>
        </div>
      </div>
    </section>
  );
}

export default UniqueSection;
