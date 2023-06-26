import "../assets/styles/scss/Search.scss";

export default function Search() {
  return (
    <section className="search">
      <input
        className="search__input"
        type="text"
        placeholder="Digite o produto"
      />
      <button className="search__btn">Search</button>
    </section>
  );
}
