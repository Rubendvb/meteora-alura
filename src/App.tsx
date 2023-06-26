import Header from "./components/Header";
import Search from "./components/Search";
import Banner from "./components/Banner";

import "./assets/styles/scss/App.scss";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Facilities from "./components/Facilities";

function App() {
  return (
    <>
      <Header />

      <section className="search">
        <Search />
      </section>

      <section className="banner">
        <Banner />
      </section>

      <section className="categories">
        <Categories />
      </section>

      <section className="products">
        <Products />
      </section>

      <Facilities />
    </>
  );
}

export default App;
