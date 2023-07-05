import LogoMobile from "/public/images/Mobile/Logo mobile.png";
import LogoTablet from "/public/images/Tablet/Logo tablet.png";
import LogoDesktop from "/public/images/Desktop/Logo desktop.png";

import "../assets/styles/scss/Header.scss";

export default function Header() {
  return (
    <header className="header__container">
      <div className="header">
        <div className="header__list">
          <nav className="header__list__nav">
            <img className="header__list__nav-img" src={LogoMobile} alt="" />
            <img
              className="header__list__nav-imgTablet"
              src={LogoTablet}
              alt=""
            />
            <img
              className="header__list__nav-imgDesktop"
              src={LogoDesktop}
              alt=""
            />
            <div className="header__list__nav__menuToggle">
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
              <ul className="header__list__nav__ul">
                <li className="header__list__nav__ul__li">
                  <a href="#">Home</a>
                </li>
                <li className="header__list__nav__ul__li">
                  <a href="#">Nossas lojas</a>
                </li>
                <li className="header__list__nav__ul__li">
                  <a href="#">Novidades</a>
                </li>
                <li className="header__list__nav__ul__li">
                  <a href="#">Promoções</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="header__button__container">
          <input
            className="header__button__container__input"
            type="text"
            name=""
            id=""
            placeholder="Digite o produto"
          />
          <button className="header__button__container-search">Buscar</button>
        </div>
      </div>
    </header>
  );
}
