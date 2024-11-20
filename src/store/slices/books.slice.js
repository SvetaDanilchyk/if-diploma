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
    checkBookExpiry: (state) => {
      const now = Date.now();
      const ONE_DAY_MS = 86400000;
      const maxDuration =  20 * ONE_DAY_MS; 
    
        Object.keys(state.waitingBooks).forEach((userId) => {
        const waitingList = state.waitingBooks[userId] || [];
    
        waitingList.forEach((book, index) => {
          const elapsedTime = now - new Date(book.takenDate).getTime();
    
          if (elapsedTime > maxDuration) {
            const nextUserId = Object.keys(state.waitingBooks).find((waitingUserId) =>
              state.waitingBooks[waitingUserId].some((waitingBook) => waitingBook.id === book.id)
            );
    
            if (nextUserId) {
              const waitingBook = state.waitingBooks[nextUserId].find((b) => b.id === book.id);
    
              Object.keys(state.userBooks).forEach((otherUserId) => {
                if (otherUserId !== nextUserId) {
                  const userBooks = state.userBooks[otherUserId] || [];
                  state.userBooks[otherUserId] = userBooks.filter((b) => b.id !== book.id);
                }
              });
    
              state.userBooks[nextUserId] = state.userBooks[nextUserId] || [];
              state.userBooks[nextUserId].push({
                ...waitingBook,
                status: "Taken",
                takenDate: now,
              });
    
              state.waitingBooks[nextUserId] = state.waitingBooks[nextUserId].filter((b) => b.id !== book.id);
            } else {
              const bookInAllBooks = state.allBooks.find((b) => b.id === book.id);
              if (bookInAllBooks) {
                bookInAllBooks.status = "Available";
              }
            }

            waitingList.splice(index, 1);
          }
        });
    
        state.waitingBooks[userId] = waitingList;
      });
    
      localStorage.setItem("userBooks", JSON.stringify(state.userBooks));
      localStorage.setItem("waitingBooks", JSON.stringify(state.waitingBooks));
      localStorage.setItem("allBooks", JSON.stringify(state.allBooks));
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


export const { addUserBook, addUserWaitingBook, checkBookExpiry, removeUserBook, loadUserBooksFromLocalStorage } = booksSlice.actions;
export default booksSlice.reducer;