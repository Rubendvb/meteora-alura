import BannerMobile1 from "../assets/images/Mobile/Banner carousel 1 _ 375.png";
import BannerMobile2 from "../assets/images/Mobile/Banner carousel 2 _ 375.png";
import BannerMobile3 from "../assets/images/Mobile/Banner carousel 3 _ 375.png";
import BannerTablet1 from "../assets/images/Tablet/Banner carousel 1 _ 768.png";
import BannerTablet2 from "../assets/images/Tablet/Banner carousel 2 _ 768.png";
import BannerTablet3 from "../assets/images/Tablet/Banner carousel 3 _ 768.png";
import BannerDesktop1 from "../assets/images/Desktop/Banner carousel 1 _ 1440.png";
import BannerDesktop2 from "../assets/images/Desktop/Banner carousel 2 _ 1440.png";
import BannerDesktop3 from "../assets/images/Desktop/Banner carousel 3 _ 1440.png";

import "../assets/styles/scss/Banner.scss";

export default function Banner() {
  return (
    <section className="banner">
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
            <img
              src={BannerMobile1}
              className="d-block w-100 banner__img-mobile"
              alt="Banner 1"
            />
            <img
              src={BannerTablet1}
              className="d-block w-100 banner__img-tablet"
              alt="Banner 1"
            />
            <img
              src={BannerDesktop1}
              className="d-block w-100 banner__img-desktop"
              alt="Banner 1"
            />
          </div>
          <div className="carousel-item banner__img">
            <div>
              <h3>COLEÇÃO ATEMPORAL</h3>
              <span>Estilo e qualidade para durar. </span>
            </div>
            <img
              src={BannerMobile2}
              className="d-block w-100 banner__img-mobile"
              alt="Banner 2"
            />
            <img
              src={BannerTablet2}
              className="d-block w-100 banner__img-tablet"
              alt="Banner 2"
            />
            <img
              src={BannerDesktop2}
              className="d-block w-100 banner__img-desktop"
              alt="Banner 2"
            />
          </div>
          <div className="carousel-item banner__img">
            <div>
              <h3>COLEÇÃO ATEMPORAL</h3>
              <span>Alto impacto visual, baixo impacto ambiental.</span>
            </div>
            <img
              src={BannerMobile3}
              className="d-block w-100 banner__img-mobile"
              alt="Banner 3"
            />
            <img
              src={BannerTablet3}
              className="d-block w-100 banner__img-tablet"
              alt="Banner 3"
            />
            <img
              src={BannerDesktop3}
              className="d-block w-100 banner__img-desktop"
              alt="Banner 3"
            />
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
    </section>
  );
}
