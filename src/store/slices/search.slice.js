import { createSlice } from "@reduxjs/toolkit";

//constans
import { booksUrl } from "../../constans/url";


export const searchSlice = createSlice({
  name: "search",
  initialState: {
    homeBooks: [],
    searchResults: [],
    error: null,
    loading: false,
  },
  reducers: {
    fetchHomeBooksRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchHomeBooksSuccess(state, action) {
      state.homeBooks = action.payload;
      console.log('state.action.payload',state);
      state.loading = false;
    },
    fetchBooksSuccess(state, action) {
      state.searchResults = action.payload;
      state.loading = false;
    },
    fetchBooksFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    resetSearchResults(state) {
      state.searchResults = [];
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
    dispatch(fetchBooksFailure(error.message));
  }
};

export const fetchBooks =
  (query = "") =>
  async (dispatch) => {
    try {
      const urlBooks = new URL(booksUrl);
      if (query) {
        urlBooks.searchParams.append("search", query);
      }
      const response = await fetch(urlBooks);
      const data = await response.json();
      dispatch(fetchBooksSuccess(data));
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
} = searchSlice.actions;

export const searchReducer = searchSlice.reducer;
