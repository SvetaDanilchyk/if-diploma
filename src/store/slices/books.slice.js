import { createSlice, createSelector } from "@reduxjs/toolkit";

export const selectAllBooks = (state) => state.books.allBooks;
export const selectAllUserBooks = (state) => state.books.userBooks;
export const selectAllWaitingBooks = (state) => state.books.waitingBooks;

export const selectUserBooks = createSelector(
  [selectAllUserBooks, (state, userId) => userId],
  (userBooks, userId) => userBooks[userId] || [],
);

export const selectWaitingBooks = createSelector(
  [selectAllWaitingBooks, (state, userId) => userId],
  (waitingBooks, userId) => waitingBooks[userId] || [],
);

const initialState = {
  userBooks: {},
  waitingBooks: {},
  allBooks: [],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addUserBook: (state, action) => {
      const { userId, book, userName } = action.payload;

      // Add a book to userBooks
      if (!state.userBooks[userId]) {
        state.userBooks[userId] = [];
      }

      const existingBook = state.userBooks[userId].find(
        (b) => b.id === book.id,
      );
      if (!existingBook) {
        state.userBooks[userId].push({
          ...book,
          status: "Taken",
          bookholder: userName,
        });
      }

      // Synchronization with allBooks
      const bookInAllBooks = state.allBooks.find((b) => b.id === book.id);
      if (!bookInAllBooks) {
        state.allBooks.push({
          ...book,
          status: "Taken",
          bookholder: userName,
        });
      } else {
        bookInAllBooks.status = "Taken";
        bookInAllBooks.bookholder = userName;
      }
    },

    addUserWaitingBook: (state, action) => {
      const { userId, book } = action.payload;

      if (!state.waitingBooks[userId]) {
        state.waitingBooks[userId] = [];
      }

      const existingBook = state.waitingBooks[userId].find(
        (b) => b.id === book.id,
      );
      if (!existingBook) {
        state.waitingBooks[userId].push({
          ...book,
          status: "Waiting for",
          takenDate: Date.now(),
        });
      }
    },

    removeUserBook: (state, action) => {
      const { userId, bookId } = action.payload;

      if (state.userBooks[userId]) {
        state.userBooks[userId] = state.userBooks[userId].filter(
          (book) => book.id !== bookId,
        );
      }

      if (state.waitingBooks[userId]) {
        state.waitingBooks[userId] = state.waitingBooks[userId].filter(
          (book) => book.id !== bookId,
        );
      }

      // We update only the "Available" status for books that were in "Taken"
      const bookInAllBooks = state.allBooks.find(
        (b) => b.id === bookId && b.status === "Taken",
      );
      if (bookInAllBooks) {
        bookInAllBooks.status = "Available";
        bookInAllBooks.bookholder = null;
      }
    },

    checkBookExpiry: (state) => {
      const now = Date.now();
      const ONE_DAY_MS = 86400000;
      const maxDuration = ONE_DAY_MS * 20;

      Object.keys(state.waitingBooks).forEach((userId) => {
        const waitingList = state.waitingBooks[userId] || [];

        waitingList.forEach((book, index) => {
          const elapsedTime = now - new Date(book.takenDate).getTime();

          if (elapsedTime > maxDuration) {
            console.log("maxDuration", maxDuration);
            const nextUserId = Object.keys(state.waitingBooks).find(
              (waitingUserId) =>
                state.waitingBooks[waitingUserId].some(
                  (waitingBook) => waitingBook.id === book.id,
                ),
            );

            if (nextUserId) {
              const waitingBook = state.waitingBooks[nextUserId].find(
                (b) => b.id === book.id,
              );

              Object.keys(state.userBooks).forEach((otherUserId) => {
                if (otherUserId !== nextUserId) {
                  const userBooks = state.userBooks[otherUserId] || [];
                  state.userBooks[otherUserId] = userBooks.filter(
                    (b) => b.id !== book.id,
                  );
                }
              });

              state.userBooks[nextUserId] = state.userBooks[nextUserId] || [];
              state.userBooks[nextUserId].push({
                ...waitingBook,
                status: "Taken",
                takenDate: now,
              });

              state.waitingBooks[nextUserId] = state.waitingBooks[
                nextUserId
              ].filter((b) => b.id !== book.id);
            } else {
              const bookInAllBooks = state.allBooks.find(
                (b) => b.id === book.id,
              );
              if (bookInAllBooks) {
                bookInAllBooks.status = "Available";
              }
            }

            waitingList.splice(index, 1);
          }
        });

        state.waitingBooks[userId] = waitingList;
      });
    },
    loadBooksFromLocalStorage: (state, action) => {
      const { userBooks, waitingBooks, allBooks } = action.payload;
      state.userBooks = userBooks || {};
      state.waitingBooks = waitingBooks || {};
      state.allBooks = allBooks || [];
    },
  },
});

export const {
  addUserBook,
  addUserWaitingBook,
  removeUserBook,
  checkBookExpiry,
  loadBooksFromLocalStorage,
} = booksSlice.actions;
export default booksSlice.reducer;
