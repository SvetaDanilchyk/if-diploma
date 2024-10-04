import { createSlice } from "@reduxjs/toolkit";

export const booksSlice  = createSlice({
    name: "books",
    initialState: {
        userBooks: [],
      },
    reducers: {
        orderBook: (state, action) => {
            const { id, name, author, imageUrl, status } = action.payload;

            if (status === 'Taken') {
              const userBookExists = state.userBooks.find(book => book.id === id);
              if (!userBookExists) {
                state.userBooks.push({ id, name, author, imageUrl, status });
              }
            }
          },
  }
});
  
export const { orderBook } = booksSlice.actions;
export default booksSlice.reducer;
  