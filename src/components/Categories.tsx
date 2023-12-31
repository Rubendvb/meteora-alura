import Camiseta from "../assets/images/Mobile/Categorias/Categoria camiseta.png";
import CamisetaTablet from "../assets/images/Tablet/Categorias/Categoria camiseta.png";
import CamisetaDesktop from "../assets/images/Desktop/Categorias/Categoria camiseta.png";
import Bolsas from "../assets/images/Mobile/Categorias/Categoria Bolsas.png";
import BolsasTablet from "../assets/images/Tablet/Categorias/Categoria Bolsas.png";
import BolsasDesktop from "../assets/images/Desktop/Categorias/Categoria Bolsa.png";
import Calcados from "../assets/images/Mobile/Categorias/Categoria calçados.png";
import CalcadosTablet from "../assets/images/Tablet/Categorias/Categoria calçados.png";
import CalcadosDesktop from "../assets/images/Desktop/Categorias/Categoria Calçados.png";
import Calcas from "../assets/images/Mobile/Categorias/Categoria calças.png";
import CalcasTablet from "../assets/images/Tablet/Categorias/Categoria calças.png";
import CalcasDesktop from "../assets/images/Desktop/Categorias/Categoria calça.png";
import Casacos from "../assets/images/Mobile/Categorias/Categoria Casacos.png";
import CasacosTablet from "../assets/images/Tablet/Categorias/Categoria casacos.png";
import CasacosDesktop from "../assets/images/Desktop/Categorias/Categoria casacos.png";
import Oculos from "../assets/images/Mobile/Categorias/Categoria óculos.png";
import OculosTablet from "../assets/images/Tablet/Categorias/Categoria óculos.png";
import OculosDesktop from "../assets/images/Desktop/Categorias/Categoria óculos.png";

import "../assets/styles/scss/Categories.scss";

export default function Categories() {
  return (
    <section className="categories">
      <h3 className="categories__title">Busque por categoria:</h3>

      <div className="categories__container">
        <article className="categories__container__card">
          <img
            className="categories__container__card-img"
            src={Camiseta}
            alt=""
          />
          <img
            className="categories__container__card-imgTablet"
            src={CamisetaTablet}
            alt=""
          />
          <img
            className="categories__container__card-imgDesktop"
            src={CamisetaDesktop}
            alt=""
          />
          <div className="categories__container__card__div-span">
            <span>Camisetas</span>
          </div>
        </article>

        <article className="categories__container__card">
          <img
            className="categories__container__card-img"
            src={Bolsas}
            alt=""
          />
          <img
            className="categories__container__card-imgTablet"
            src={BolsasTablet}
            alt=""
          />
          <img
            className="categories__container__card-imgDesktop"
            src={BolsasDesktop}
            alt=""
          />
          <div className="categories__container__card__div-span">
            <span>Bolsas</span>
          </div>
        </article>
        <article className="categories__container__card">
          <img
            className="categories__container__card-img"
            src={Calcados}
            alt=""
          />
          <img
            className="categories__container__card-imgTablet"
            src={CalcadosTablet}
            alt=""
          />
          <img
            className="categories__container__card-imgDesktop"
            src={CalcadosDesktop}
            alt=""
          />
          <div className="categories__container__card__div-span">
            <span>Calçados</span>
          </div>
        </article>

        <article className="categories__container__card">
          <img
            className="categories__container__card-img"
            src={Calcas}
            alt=""
          />
          <img
            className="categories__container__card-imgTablet"
            src={CalcasTablet}
            alt=""
          />
          <img
            className="categories__container__card-imgDesktop"
            src={CalcasDesktop}
            alt=""
          />
          <div className="categories__container__card__div-span">
            <span>Calças</span>
          </div>
        </article>

        <article className="categories__container__card">
          <img
            className="categories__container__card-img"
            src={Casacos}
            alt=""
          />
          <img
            className="categories__container__card-imgTablet"
            src={CasacosTablet}
            alt=""
          />
          <img
            className="categories__container__card-imgDesktop"
            src={CasacosDesktop}
            alt=""
          />
          <div className="categories__container__card__div-span">
            <span>Casacos</span>
          </div>
        </article>

        <article className="categories__container__card">
          <img
            className="categories__container__card-img"
            src={Oculos}
            alt=""
          />
          <img
            className="categories__container__card-imgTablet"
            src={OculosTablet}
            alt=""
          />
          <img
            className="categories__container__card-imgDesktop"
            src={OculosDesktop}
            alt=""
          />
          <div className="categories__container__card__div-span">
            <span>Óculos</span>
          </div>
        </article>
      </div>
    </section>
  );
}
