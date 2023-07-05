import LogoMobile from "/images/Mobile/Logo mobile.png";
import LogoTablet from "/images/Tablet/Logo tablet.png";
import LogoDesktop from "/images/Desktop/Logo desktop.png";

import "../assets/styles/scss/Header.scss";
import { searchProps } from "../@types/search";

export default function Header({ search, setSearch }: searchProps) {
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
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Digite o produto"
          />
          <button className="header__button__container-search" type="submit">
            Buscar
          </button>
        </div>
      </div>
    </header>
  );
}
