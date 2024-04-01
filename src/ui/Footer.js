import Logo from "./Logo";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__main">
          <div>
            <Logo />
            <p>
              <a href="#">Odesa, Ukraine</a>
            </p>
            <p>
              <a href="#">forhome@gmail.com</a>
            </p>
          </div>

          <div>
            <ul className="footer__list">
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Embroidery</a>
              </li>
              <li>
                <a href="#">Contacts </a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="footer__list">
              <li>
                <a href="#">Shipping</a>
              </li>
              <li>
                <a href="#">Size Guide</a>
              </li>
              <li>
                <a href="#">Reviews</a>
              </li>
              <li>
                <a href="#">Shop Policies </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__aside">
          <div>
            <ul className="social-links">
              <li>
                <a href="#">
                  <svg
                    className="social-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 50 50"
                  >
                    <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    className="social-icon "
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 50 50"
                  >
                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    className="social-icon etsy"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 50 50"
                  >
                    <path d="M21,1H2A1,1,0,0,0,1,2V4A1,1,0,0,0,2,5H5A3,3,0,0,1,8,8V42a3,3,0,0,1-3,3H2a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1H38.438a2,2,0,0,0,1.941-1.515l2.31-11.242A1,1,0,0,0,41.719,35h-2a1,1,0,0,0-.949.684l-2.709,5.742A5,5,0,0,1,31.271,45H19a3,3,0,0,1-3-3V27h8a5,5,0,0,1,5,5v1h3V16H29v2a5,5,0,0,1-5,5H16V8a3,3,0,0,1,3-3H31a5,5,0,0,1,5,5v4a1,1,0,0,0,1,1h1.133a1,1,0,0,0,.99-.859L40.674,3.283A2,2,0,0,0,38.694,1Z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <p className="copy">&copy; 2024 forhome </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
