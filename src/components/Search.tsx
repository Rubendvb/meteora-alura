import "../assets/styles/scss/Search.scss";

import { searchProps } from "../@types/search";

export default function Search({ search, setSearch }: searchProps) {
  return (
    <section className="search">
      <input
        className="search__input"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Digite o produto"
      />
      <button className="search__btn" type="submit">
        Search
      </button>
    </section>
  );
}
