import React from "react";
import s from "./SearchBar.module.css";
import { MdOutlineImageSearch } from "react-icons/md";

const SearchBar = ({ onSubmit }) => {
  return (
    <header>
      <form className={s.searchForm}>
        <input
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
          className={s.searchInput}
        />
        <button type="submit" className={s.btn}>
          <MdOutlineImageSearch size={30} />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
