import { createSlice } from "@reduxjs/toolkit";
import { booksUrl } from "../../constans/url";

const initialState = {
  homeBooks: [],
  searchResults: [],
  error: null,
  loading: false,
  searchFlag: false,
};

const getRandomRating = () => Math.floor(Math.random() * 5) + 1;

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    fetchHomeBooksRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchHomeBooksSuccess(state, action) {
      const savedRatings =
        JSON.parse(localStorage.getItem("bookRatings")) || {};
      const allBooks = JSON.parse(localStorage.getItem("allBooks")) || [];

      const booksWithRatings = action.payload.map((book) => {
        const matchingBook = allBooks.find((allBook) => allBook.id === book.id);

        if (!savedRatings[book.id]) {
          savedRatings[book.id] = getRandomRating();
        }

        return {
          ...book,
          rating: savedRatings[book.id],
          bookholder: matchingBook?.bookholder || null,
        };
      });

      localStorage.setItem("bookRatings", JSON.stringify(savedRatings));
      state.homeBooks = booksWithRatings;
      state.loading = false;
    },
    fetchBooksSuccess(state, action) {
      state.searchResults = action.payload;
      state.searchFlag = true;
      state.loading = false;
    },
    fetchBooksFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    resetSearchResults(state) {
      state.searchResults = [];
      state.searchFlag = false;
    },
    loadStateFromLocalStorage(state) {
      const savedHomeBooks =
        JSON.parse(localStorage.getItem("bookRatings")) || [];
      state.homeBooks = savedHomeBooks;
    },
  },
});

export const fetchHomeBooks = () => async (dispatch) => {
  dispatch(fetchHomeBooksRequest());
  try {
    const response = await fetch(booksUrl);
    const data = await response.json();
    dispatch(fetchHomeBooksSuccess(data));
  } catch (error) {
    console.error("Error fetching books:", error);
    dispatch(fetchBooksFailure(error.message));
  }
};

export const fetchBooks =
  (query = "") =>
  async (dispatch, getState) => {
    dispatch(fetchHomeBooksRequest());
    try {
      const state = getState();
      const { homeBooks } = state.search;
      const filteredBooks = homeBooks.filter(
        (book) =>
          book.name.toLowerCase().includes(query.toLowerCase()) ||
          book.author.toLowerCase().includes(query.toLowerCase()),
      );

      dispatch(fetchBooksSuccess(filteredBooks));
    } catch (error) {
      dispatch(fetchBooksFailure(error.message));
    }
  };

export const {
  fetchHomeBooksRequest,
  fetchHomeBooksSuccess,
  fetchBooksSuccess,
  fetchBooksFailure,
  resetSearchResults,
  loadStateFromLocalStorage,
} = searchSlice.actions;

export const searchReducer = searchSlice.reducer;
