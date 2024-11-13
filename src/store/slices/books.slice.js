import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userBooks: {},
  waitingBooks: {},
  allBooks: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addUserBook: (state, action) => {
      const { userId, book } = action.payload;
      if (!state.userBooks[userId]) {
        state.userBooks[userId] = [];
      }

      const existingBook = state.userBooks[userId].find(b => b.id === book.id);
      if (!existingBook) {
        const fullBookData = {
          ...book,
          status: "Taken",
          takenDate: Date.now()
        };
        state.userBooks[userId].push(fullBookData);
      }
    
      localStorage.setItem('userBooks', JSON.stringify(state.userBooks));
    },
    
    addUserWaitingBook: (state, action) => {
      const { userId, book } = action.payload;
      if (!state.waitingBooks[userId]) {
        state.waitingBooks[userId] = [];
      }

      const existingBook = state.waitingBooks[userId].find(b => b.id === book.id);
      if (!existingBook) {
        const waitingBook = {
          ...book,
          status: "Waiting for",
          takenDate: Date.now()
        };
        state.waitingBooks[userId].push(waitingBook);
      }
    
      localStorage.setItem('waitingBooks', JSON.stringify(state.waitingBooks));
    },

    removeUserBook: (state, action) => {
      const { userId, bookId } = action.payload;

      if (state.userBooks[userId]) {
        state.userBooks[userId] = state.userBooks[userId].filter(book => book.id !== bookId);
      }

      if (state.waitingBooks[userId]) {
        state.waitingBooks[userId] = state.waitingBooks[userId].filter(book => book.id !== bookId);
      }

      localStorage.setItem('userBooks', JSON.stringify(state.userBooks));
      localStorage.setItem('waitingBooks', JSON.stringify(state.waitingBooks));
    },

    loadUserBooksFromLocalStorage: (state) => {
      const savedUserBooks = JSON.parse(localStorage.getItem('userBooks')) || {};
      state.userBooks = savedUserBooks;

      const savedWaitingBooks = JSON.parse(localStorage.getItem('waitingBooks')) || {};
      state.waitingBooks = savedWaitingBooks;
    },
  }
});

export const { addUserBook, addUserWaitingBook, removeUserBook, loadUserBooksFromLocalStorage } = booksSlice.actions;
export default booksSlice.reducer;

