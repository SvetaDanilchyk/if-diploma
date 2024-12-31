import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
//styles
import { useSearchStyles } from "./Search.styles.js";
//store
import { fetchBooks } from "../../store/slices/search.slice.js";
//img
import loupe from "../../icons/header/loupe.png";

export const Search = () => {
  const classes = useSearchStyles();
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const isMediumScreen = useMediaQuery({ minWidth: 320, maxWidth: 1024 });

  const formSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchBooks(search));
    setSearch("");
  };

  return (
    <>
      <form className={classes.search} onSubmit={formSubmit}>
        <img src={loupe} alt="loupe" />
        <input
          type="search"
          name="searchBook"
          placeholder={isMediumScreen ? "" : "Search by author, title, name"}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </>
  );
};
