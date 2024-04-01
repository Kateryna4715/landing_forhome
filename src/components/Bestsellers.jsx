import Item from "./Item";
import { bestsellersData } from "../data/homeData";

function Bestsellers() {
  return (
    <section className="bestsellers">
      <div className="bestsellers__content centered">
        <h2>Our bestsellers</h2>

        <div className="best">
          {bestsellersData.map((best, i) => (
            <Item
              img={best.img}
              price={best.price}
              title={best.title}
              key={i}
            />
          ))}
        </div>

        <div className="btns-lr flex">
          <button className="btns-lr__btn">
            <svg
              className="btns-lr__icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
            >
              <path
                fill="currentColor"
                d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0"
              />
            </svg>
          </button>
          <button className="btns-lr__btn flex">
            <svg
              className="btns-lr__icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
            >
              <path
                fill="currentColor"
                d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8l-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Bestsellers;
