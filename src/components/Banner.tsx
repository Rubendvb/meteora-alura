import Carousel1 from "../assets/images/Mobile/Banner carousel 1 _ 375.png";
import Carousel2 from "../assets/images/Mobile/Banner carousel 2 _ 375.png";
import Carousel3 from "../assets/images/Mobile/Banner carousel 3 _ 375.png";

import "../assets/styles/scss/Banner.scss";

export default function Banner() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Carousel1} className="d-block w-100" alt="Banner 1" />
        </div>
        <div className="carousel-item banner__img">
          <div>
            <h3>COLEÇÃO ATEMPORAL</h3>
            <span>Estilo e qualidade para durar. </span>
          </div>
          <img src={Carousel2} className="d-block w-100" alt="Banner 2" />
        </div>
        <div className="carousel-item banner__img">
          <div>
            <h3>COLEÇÃO ATEMPORAL</h3>
            <span>Alto impacto visual, baixo impacto ambiental.</span>
          </div>
          <img src={Carousel3} className="d-block w-100" alt="Banner 3" />
        </div>
      </div>
      <button
        className="carousel-control-prev banner__btn"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span aria-hidden="true">
          <i className="bi bi-caret-left-fill"></i>
        </span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next banner__btn"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span aria-hidden="true">
          <i className="bi bi-caret-right-fill"></i>
        </span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
