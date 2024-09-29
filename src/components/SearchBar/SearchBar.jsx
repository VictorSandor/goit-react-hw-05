import { FiSearch } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";
import style from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  function handleSubmit(evt) {
    evt.preventDefault();
    const query = evt.target.elements.search.value.trim();
    query === ""
      ? toast.error("Search query cannot be empty!")
      : onSearch(query);
    evt.target.reset();
  }

  return (
    <header className={style.searchBar}>
      <Toaster />
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Enter movie name"
          name="search"
          className={style.searchFld}
        />
        <button type="submit" className={style.searchBtn}>
          <FiSearch size="24px" />
        </button>
      </form>
    </header>
  );
}