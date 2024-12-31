import React, { Suspense, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// components
import { Loader } from "../Loader/Loader";
import { Main } from "../Main/Main";
import { Header } from "../Header";
import { Footer } from "../Footer";
// store
import { fetchHomeBooks } from "../../store/slices/search.slice";
import { checkBookExpiry } from "../../store/slices/books.slice";
import { setUser } from "../../store/slices/user.slice";
import { setAllUsers } from "../../store/slices/registration.slice";
// constants
import { AUTH_STATUSES } from "../../constans/authStatuses";
import { PATH } from "../../constans/paths";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);
  const { loading: searchLoading } = useSelector((state) => state.search);
  const isLoggedIn = status === AUTH_STATUSES.loggedIn;

  // Check for book rental expiration
  useEffect(() => {
    const interval = setInterval(
      () => {
        dispatch(checkBookExpiry());
      },
      6 * 60 * 60 * 1000,
    );
    return () => clearInterval(interval);
  }, [dispatch]);

  // Check the current user and load the list of users
  useEffect(() => {
    const currentUserId = localStorage.getItem("currentUserId");
    const allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];

    if (currentUserId) {
      const savedUser = JSON.parse(
        localStorage.getItem(`logInUser-${currentUserId}`),
      );
      if (savedUser) {
        dispatch(setUser(savedUser));
      }
    }

    if (allUsers.length > 0) {
      dispatch(setAllUsers(allUsers));
    }
  }, [dispatch]);

  // Authorization check
  useEffect(() => {
    if (status === AUTH_STATUSES.loggedOut) {
      navigate(PATH.index);
    } else if (isLoggedIn) {
      dispatch(fetchHomeBooks());
    }
  }, [status, dispatch, navigate, isLoggedIn]);

  if (searchLoading) {
    return <Loader />;
  }

  return (
    <Suspense fallback={<Loader />}>
      {isLoggedIn ? (
        <>
          <Header label1="All books" label2="Your orders" account={true} />
          <Outlet />
          <Footer />
        </>
      ) : (
        <>
          <Header label1="Log in" label2="Sign up" account={false} />
          <Main />
        </>
      )}
    </Suspense>
  );
}

export default App;
