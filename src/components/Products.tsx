import { useEffect, useState } from "react";

import ModalProducts from "./ModalProducts";

import * as productsService from "../service/ProductsService";

import "../assets/styles/scss/Products.scss";

import { ProductProps } from "../@types/product";

export default function Products() {
  const [products, setProducts] = useState<ProductProps[]>([]);

  const loadProducts = async () => {
    const res = await productsService.getAllProducts();

    setProducts(res.data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <section className="products">
      <h3 className="products__title">Produtos que estão bombando!</h3>

      <div className="products__container">
        {products &&
          products.map((product) => {
            return (
              <article key={product.id} className="products__container__card">
                <img
                  className="products__container__card-img"
                  src={product.image?.mobile}
                  alt=""
                />
                <img
                  className="products__container__card-imgTablet"
                  src={product.image?.tablet}
                  alt=""
                />
                <img
                  className="products__container__card-imgDesktop"
                  src={product.image?.desktop}
                  alt=""
                />
                <div>
                  <h4 className="products__container__card-title">
                    {product.title}
                  </h4>
                  <p className="products__container__card-text">
                    {product.description}
                  </p>
                  <span className="products__container__card-span">
                    {product.price}
                  </span>
                  <button
                    className="products__container__card-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#modalProducts"
                  >
                    Ver mais
                  </button>
                </div>
              </article>
            );
          })}
      </div>

      {/* <!-- Modal Products --> */}
      <div
        className="modal fade"
        id="modalProducts"
        tabIndex={-1}
        aria-labelledby="modalProducts"
        aria-hidden="true"
      >
        <ModalProducts />
      </div>
    </section>
  );
}
