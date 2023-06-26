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
    </>
  );
}

export default App;
