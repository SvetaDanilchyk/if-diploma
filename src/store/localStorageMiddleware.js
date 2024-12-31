const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  const state = store.getState();

  // Process auth
  if (action.type.startsWith("auth/")) {
    localStorage.setItem("auth", JSON.stringify(state.auth));
  }

  // Process registration
  if (
    action.type === "user/setUser" ||
    action.type === "registration/registerUser" ||
    action.type === "registration/loginUser"
  ) {
    const { user, users } = state.registration;
    if (user?.id) {
      localStorage.setItem("currentUserId", user.id);
      localStorage.setItem(`logInUser-${user.id}`, JSON.stringify(user));
    }
    if (users) {
      localStorage.setItem("allUsers", JSON.stringify(users));
    }
  }

  // Handle user data update
  if (
    action.type === "registration/updateUser" ||
    action.type === "user/setUser"
  ) {
    const { users } = store.getState().registration;
    localStorage.setItem("allUsers", JSON.stringify(users));
  }

  // Handle logout
  if (action.type === "auth/logout") {
    localStorage.removeItem("currentUserId");
  }

  // Process books
  if (action.type === "books/checkBookExpiry") {
    localStorage.setItem("userBooks", JSON.stringify(state.books.userBooks));
    localStorage.setItem(
      "waitingBooks",
      JSON.stringify(state.books.waitingBooks),
    );
    localStorage.setItem("allBooks", JSON.stringify(state.books.allBooks));
  }

  // Process search
  if (action.type.startsWith("search/")) {
    if (Array.isArray(state.search.homeBooks)) {
      const savedRatings = state.search.homeBooks.reduce((acc, book) => {
        acc[book.id] = book.rating;
        return acc;
      }, {});
      localStorage.setItem("bookRatings", JSON.stringify(savedRatings));
    } else {
      console.error("homeBooks is not an array:", state.search.homeBooks);
    }
  }

  return result;
};

export default localStorageMiddleware;
