import Logo from "../assets/images/Desktop/Logo desktop.png";

import "../assets/styles/scss/Header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header__list">
        <nav className="header__list__nav">
          <img src={Logo} alt="" />

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

      <div className="header__button">
        <input
          className="header__button__input"
          type="text"
          name=""
          id=""
          placeholder="Digite o produto"
        />

        <button className="header__button-search">Buscar</button>
      </div>
    </header>
  );
}
