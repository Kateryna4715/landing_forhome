import StarRating from "../ui/StarRating";
import { testimonialsData } from "../data/homeData";
import Customer from "./Customer";

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__content centered">
        <div className="testimonials__textbox">
          <h2>Testimonials</h2>

          <div className="card flex">
            <img src="categories/cat2.png" alt="Brown headscarf" />
            <div className="card__textbox">
              <p className="card__title">Page on Feb 27, 2024</p>
              <StarRating />
              <p className="card__testimonial">
                Very well made, beautiful hand embroidery and super cute!
              </p>
            </div>
          </div>

          <div className="dots">
            <button className="dots__dot">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 18a6 6 0 1 0 0-12a6 6 0 0 0 0 12"
                />
              </svg>
            </button>
            <button className="dots__dot">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 18a6 6 0 1 0 0-12a6 6 0 0 0 0 12"
                />
              </svg>
            </button>
            <button className="dots__dot">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 18a6 6 0 1 0 0-12a6 6 0 0 0 0 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="customers">
          {testimonialsData.map((cust, i) => (
            <Customer image={cust.img} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
