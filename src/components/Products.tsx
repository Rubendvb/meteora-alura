import CamisetaMobile from "../assets/images/Mobile/Imagens cards/Card camiseta.png";
import CamisetaTablet from "../assets/images/Tablet/Imagens Cards/camiseta.png";
import CamisetaDesktop from "../assets/images/Desktop/Imagens Cards/Camiseta.png";
import CalçaMobile from "../assets/images/Mobile/Imagens cards/Card calça.png";
import CalçaTablet from "../assets/images/Tablet/Imagens Cards/calça.png";
import CalçaDesktop from "../assets/images/Desktop/Imagens Cards/Calça.png";
import TenisMobile from "../assets/images/Mobile/Imagens cards/Card tenis.png";
import TenisTablet from "../assets/images/Tablet/Imagens Cards/tenis.png";
import TenisDesktop from "../assets/images/Desktop/Imagens Cards/Tenis.png";
import JaquetaMobile from "../assets/images/Mobile/Imagens cards/Card jaqueta jeans.png";
import JaquetaTablet from "../assets/images/Tablet/Imagens Cards/jaqueta jeans.png";
import JaquetaDesktop from "../assets/images/Desktop/Imagens Cards/Jaqueta.png";
import OculosMobile from "../assets/images/Mobile/Imagens cards/Cards óculos.png";
import OculosTablet from "../assets/images/Tablet/Imagens Cards/óculos.png";
import OculosDesktop from "../assets/images/Desktop/Imagens Cards/óculos.png";
import BolsaMobile from "../assets/images/Mobile/Imagens cards/Card bolsa.png";
import BolsaTablet from "../assets/images/Tablet/Imagens Cards/bolsa.png";
import BolsaDesktop from "../assets/images/Desktop/Imagens Cards/Bolsa.png";

import "../assets/styles/scss/Products.scss";

export default function Products() {
  return (
    <section className="products">
      <h3 className="products__title">Produtos que estão bombando!</h3>

      <div className="products__container">
        <article className="products__container__card">
          <img
            className="products__container__card-img"
            src={CamisetaMobile}
            alt=""
          />
          <img
            className="products__container__card-imgTablet"
            src={CamisetaTablet}
            alt=""
          />
          <img
            className="products__container__card-imgDesktop"
            src={CamisetaDesktop}
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
          <img
            className="products__container__card-imgTablet"
            src={CalçaTablet}
            alt=""
          />
          <img
            className="products__container__card-imgDesktop"
            src={CalçaDesktop}
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
          <img
            className="products__container__card-imgTablet"
            src={TenisTablet}
            alt=""
          />
          <img
            className="products__container__card-imgDesktop"
            src={TenisDesktop}
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
          <img
            className="products__container__card-imgTablet"
            src={JaquetaTablet}
            alt=""
          />
          <img
            className="products__container__card-imgDesktop"
            src={JaquetaDesktop}
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
          <img
            className="products__container__card-imgTablet"
            src={OculosTablet}
            alt=""
          />
          <img
            className="products__container__card-imgDesktop"
            src={OculosDesktop}
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
          <img
            className="products__container__card-imgTablet"
            src={BolsaTablet}
            alt=""
          />
          <img
            className="products__container__card-imgDesktop"
            src={BolsaDesktop}
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
    </section>
  );
}
