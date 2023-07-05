import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Facilities from "./components/Facilities";
import Header from "./components/Header";
import Newsletter from "./components/Newsletter";
import Products from "./components/Products";
import Search from "./components/Search";

import "./assets/styles/scss/App.scss";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  console.log(search);

  return (
    <>
      <Header />

      <Search search={search} setSearch={setSearch} />

      <Banner />

      <Categories />

      <Products />

      <Facilities />

      <Newsletter />

      <footer className="footer">
        <p className="footer-text">
          2023 © Desenvolvido por Alura | Projeto fictício sem fins comerciais.
        </p>
      </footer>
    </>
  );
}

export default App;
