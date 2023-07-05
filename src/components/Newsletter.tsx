import Close from "../assets/images/Mobile/Ícones/close.svg";
import CheckCircle from "../assets/images/Mobile/Ícones/check-circle.svg";

import "../assets/styles/scss/Newsletter.scss";

export default function Newsletter() {
  return (
    <section className="newsletter">
      <div className="newsletter__container">
        <p className="newsletter__container-text">
          Quer receber nossas novidades, promoções exclusivas e 10% OFF na
          primeira compra? Cadastre-se!
        </p>

        <form className="newsletter__container__form">
          <input
            className="newsletter__container__form-input"
            type="email"
            placeholder="Digite seu e-mail"
          />
          <button
            className="newsletter__container__form-btn"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#modalNewsletter"
          >
            Enviar
          </button>
        </form>
      </div>

      {/* <!-- Modal E-mail --> */}
      <div
        className="modal fade"
        id="modalNewsletter"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content containerModal">
            <div className="modal-header containerModal__header">
              <img src={CheckCircle} alt="" />
              <h1
                className="modal-title fs-5 containerModal__header__title"
                id="modalProducts"
              >
                E-mail cadastrado com sucesso!
              </h1>
              <img
                className="containerModal__header__img"
                src={Close}
                alt=""
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <p>Em breve você receberá novidades exclusivas da Meteora.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
