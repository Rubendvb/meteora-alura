import Header from "./components/Header";
import Search from "./components/Search";

import "./assets/styles/scss/App.scss";

function App() {
  return (
    <>
      <Header />

      <section className="search">
        <Search />
      </section>
    </>
  );
}

export default App;
