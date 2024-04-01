import BtnCTA from "../ui/BtnCTA";
import "./welcome.css";

function WelcomeSection() {
  return (
    <section className="welcome centered">
      <div className="welcome__content flex-align">
        <div className="welcome__textbox">
          <h2>Welcome to forhome atelier</h2>

          <p className="welcome__description">
            We are a command of professionals who will help you to create
            comfort in a little world called “Home”. Here you will find
            appealing aprons and home decor for a cozy place.
            <br />
            <span className="tablet-hidden">
              With an amazing quality of items and the best service you will
              stay satisfied as our customer. Want to know more about our
              manufacturing? Don’t hesitate!
            </span>
          </p>

          <BtnCTA>Learn more</BtnCTA>
        </div>

        <div>
          <img src="welcome/fabrics.png" alt="Fabrics" />
        </div>
      </div>
    </section>
  );
}

export default WelcomeSection;
