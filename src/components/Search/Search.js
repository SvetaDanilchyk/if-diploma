import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
//styles
import { useSearchStyles } from './Search.styles.js';
//store
import { fetchBooks } from '../../store/slices/search.slice.js';
//img
import loupe from '../../icons/header/loupe.png';

export const Search = () => {
  const classes = useSearchStyles();
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  
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
          placeholder="Search by author, title, name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />     
      </form>
    </>
  );
};