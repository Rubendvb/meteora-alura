import Camiseta from "../assets/images/Mobile/Categorias/Categoria camiseta.png";
import Bolsas from "../assets/images/Mobile/Categorias/Categoria Bolsas.png";
import Calcados from "../assets/images/Mobile/Categorias/Categoria calçados.png";
import Calcas from "../assets/images/Mobile/Categorias/Categoria calças.png";
import Casacos from "../assets/images/Mobile/Categorias/Categoria Casacos.png";
import Oculos from "../assets/images/Mobile/Categorias/Categoria óculos.png";

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
          <div className="categories__container__card__div-span">
            <span>Óculos</span>
          </div>
        </article>
      </div>
    </section>
  );
}
