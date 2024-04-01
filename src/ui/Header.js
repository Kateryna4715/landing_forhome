import BurgerMenu from "./BurgerMenu";
import Logo from "./Logo";
import Navigation from "./Navigation";
import SearchShop from "./SearchShop";

import "./header.css";

function Header() {
  return (
    <div>
      <div className="sales-note">
        <p>Spring sales up to 20%</p>
      </div>
      <header className="header ">
        <div className="header-content flex-align">
          <Logo />
          <Navigation />
          <SearchShop />
          <BurgerMenu />
        </div>
      </header>
    </div>
  );
}

export default Header;
