import CamisetaMobile from "../assets/images/Mobile/Imagens cards/Card camiseta.png";
import CalçaMobile from "../assets/images/Mobile/Imagens cards/Card calça.png";
import TenisMobile from "../assets/images/Mobile/Imagens cards/Card tenis.png";
import JaquetaMobile from "../assets/images/Mobile/Imagens cards/Card jaqueta jeans.png";
import OculosMobile from "../assets/images/Mobile/Imagens cards/Cards óculos.png";
import BolsaMobile from "../assets/images/Mobile/Imagens cards/Card bolsa.png";

import "../assets/styles/scss/Products.scss";

export default function Products() {
  return (
    <>
      <h3 className="products__title">Produtos que estão bombando!</h3>

      <div className="products__container">
        <article className="products__container__card">
          <img
            className="products__container__card-img"
            src={CamisetaMobile}
            alt=""
          />
          <div>
            <h4 className="products__container__card-title">
              Camiseta Conforto
            </h4>
            <p className="products__container__card-text">
              Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o
              verão. Modelagem unissex.
            </p>
            <span className="products__container__card-span">R$ 70,00</span>
            <button className="products__container__card-btn">Ver mais</button>
          </div>
        </article>
        <article className="products__container__card">
          <img
            className="products__container__card-img"
            src={CalçaMobile}
            alt=""
          />
          <div>
            <h4 className="products__container__card-title">
              Calça Alfaiataria
            </h4>
            <p className="products__container__card-text">
              Modelo Wide Leg alfaiataria em linho. Uma peça pra vida toda!
            </p>
            <span className="products__container__card-span">R$ 180,00</span>
            <button className="products__container__card-btn">Ver mais</button>
          </div>
        </article>
        <article className="products__container__card">
          <img
            className="products__container__card-img"
            src={TenisMobile}
            alt=""
          />
          <div>
            <h4 className="products__container__card-title">Tênis Chunky</h4>
            <p className="products__container__card-text">
              Snicker casual com solado mais alto e modelagem robusta. Modelo
              unissex.
            </p>
            <span className="products__container__card-span">R$ 250,00</span>
            <button className="products__container__card-btn">Ver mais</button>
          </div>
        </article>
        <article className="products__container__card">
          <img
            className="products__container__card-img"
            src={JaquetaMobile}
            alt=""
          />
          <div>
            <h4 className="products__container__card-title">Jaqueta Jeans</h4>
            <p className="products__container__card-text">
              Modelo unissex oversized com gola de camurça. Atemporal e
              autêntica!
            </p>
            <span className="products__container__card-span">R$ 150,00</span>
            <button className="products__container__card-btn">Ver mais</button>
          </div>
        </article>
        <article className="products__container__card">
          <img
            className="products__container__card-img"
            src={OculosMobile}
            alt=""
          />
          <div>
            <h4 className="products__container__card-title">Óculos Redondo</h4>
            <p className="products__container__card-text">
              Armação metálica em grafite com lentes arredondadas. Sem erro!
            </p>
            <span className="products__container__card-span">R$ 120,00</span>
            <button className="products__container__card-btn">Ver mais</button>
          </div>
        </article>
        <article className="products__container__card">
          <img
            className="products__container__card-img"
            src={BolsaMobile}
            alt=""
          />
          <div>
            <h4 className="products__container__card-title">Bolsa coringa</h4>
            <p className="products__container__card-text">
              Bolsa camel em couro sintético de alta duração. Ideal para
              acompanhar você por uma vida!
            </p>
            <span className="products__container__card-span">R$ 120,00</span>
            <button className="products__container__card-btn">Ver mais</button>
          </div>
        </article>
      </div>
    </>
  );
}
