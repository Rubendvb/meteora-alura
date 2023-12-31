import Header from "./components/Header";
import Search from "./components/Search";
import Banner from "./components/Banner";

import "./assets/styles/scss/App.scss";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Facilities from "./components/Facilities";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <>
      <Header />

      <Search />

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
