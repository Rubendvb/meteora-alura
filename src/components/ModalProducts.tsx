import CheckCircle from "/images/Mobile/Ícones/check-circle.svg";
import Close from "/images/Mobile/Ícones/close.svg";
import JaquetaMobile from "/images/Mobile/Imagens cards/Card jaqueta jeans.png";

import "../assets/styles/scss/ModalProducts.scss";

export default function ModalProducts() {
  return (
    <>
      <div className="modal-dialog">
        <div className="modal-content containerModal">
          <div className="modal-header containerModal__header">
            <img src={CheckCircle} alt="" />
            <h1
              className="modal-title fs-5 containerModal__header__title"
              id="modalProducts"
            >
              Confira detalhes sobre o produto
            </h1>
            <img
              className="containerModal__header__img"
              src={Close}
              alt=""
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body containerModal__body">
            <div>
              <div>
                <img
                  className="containerModal__body__img"
                  src={JaquetaMobile}
                  alt=""
                />
              </div>
              <div className="containerModal__body__content">
                <div className="containerModal__body__content__container">
                  <h4 className="containerModal__body__content__title">
                    Jaqueta Jeans
                  </h4>
                  <p className="containerModal__body__content__text">
                    Modelo unissex oversized com gola de camurça. Atemporal e
                    autêntica!
                  </p>

                  <hr />

                  <span className="containerModal__body__content__price">
                    R$ 150,00
                  </span>
                  <span className="containerModal__body__content__sold">
                    Vendido e entregue por Riachuelo
                  </span>
                </div>

                <div className="containerModal__body__content__colors">
                  <h5 className="containerModal__body__content__colors__title">
                    Cores:
                  </h5>

                  <div className="containerModal__body__content__colors__container">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptionsColors"
                        id="inlineRadio1"
                        value="option1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio1"
                      >
                        Azul claro
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptionsColors"
                        id="inlineRadio2"
                        value="option2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio2"
                      >
                        Offwhite
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptionsColors"
                        id="inlineRadio3"
                        value="option3"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio3"
                      >
                        Preto
                      </label>
                    </div>
                  </div>
                </div>

                <div className="containerModal__body__content__colors">
                  <h5 className="containerModal__body__content__colors__title">
                    Tamanho:
                  </h5>

                  <div className="containerModal__body__content__colors__container">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio4"
                        value="option4"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio4"
                      >
                        P
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio5"
                        value="option5"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio5"
                      >
                        PP
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio6"
                        value="option6"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio6"
                      >
                        M
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio7"
                        value="option7"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio7"
                      >
                        G
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio8"
                        value="option8"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio8"
                      >
                        GG
                      </label>
                    </div>
                  </div>
                </div>
                <button type="button" className="containerModal__body__button">
                  Adicionar à sacola
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
