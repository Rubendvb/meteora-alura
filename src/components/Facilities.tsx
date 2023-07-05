import Diamond from "/public/images/Mobile/Ícones/x-diamond.png";
import ArrowRepeat from "/public/images/Mobile/Ícones/arrow-repeat.png";
import Flower from "/public/images/Mobile/Ícones/flower1.png";

import "../assets/styles/scss/Facilities.scss";

export default function Facilities() {
  return (
    <section className="facilities">
      <div>
        <h3 className="facilities__title">
          Conheça todas as nossas facilidades
        </h3>
        <div className="facilities__content">
          <article className="facilities__content__container">
            <img
              src={Diamond}
              alt=""
              className="facilities__content__container__img"
            />
            <div className="facilities__content__container__div">
              <h4 className="facilities__content__container__div-title">
                PAGUE PELO PIX
              </h4>
              <p className="facilities__content__container__div-text">
                Ganhe 5% OFF em pagamentos via PIX
              </p>
            </div>
          </article>
          <article className="facilities__content__container">
            <img
              src={ArrowRepeat}
              alt=""
              className="facilities__content__container__img"
            />
            <div className="facilities__container__div">
              <h4 className="facilities__content__container__div-title">
                TROCA GRÁTIS
              </h4>
              <p className="facilities__content__container__div-text">
                Fique livre para trocar em até 30 dias.
              </p>
            </div>
          </article>
          <article className="facilities__content__container">
            <img
              src={Flower}
              alt=""
              className="facilities__content__container__img"
            />
            <div className="facilities__content__container__div">
              <h4 className="facilities__content__container__div-title">
                SUSTENTABILIDADE
              </h4>
              <p className="facilities__content__container__div-text">
                Moda responsável, que respeita o meio ambiente.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
