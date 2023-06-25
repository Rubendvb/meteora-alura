import Header from "./components/Header";
import Search from "./components/Search";
import Banner from "./components/Banner";

import "./assets/styles/scss/App.scss";

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
    </>
  );
}

export default App;
