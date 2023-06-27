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
          <button className="newsletter__container__form-btn" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
