import React, { Suspense, useEffect } from 'react';
import { ThemeProvider } from 'react-jss';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//styles
import { theme } from './App.styles';
//components
import { Loader } from '../Loader/Loader';
import { Main } from '../Main';
import { Header } from '../Header';
import { Footer } from '../Footer';
//store
import { fetchHomeBooks } from "../../store/slices/search.slice";
import { loadStateFromLocalStorage } from '../../store/slices/auth.slice';
import { loadUserFromLocalStorage, setUser } from '../../store/slices/user.slice';

//constans
import { AUTH_STATUSES } from '../../constans/authStatuses';
import { PATH } from '../../constans/paths';
import { checkBookExpiry } from '../../store/slices/books.slice';

function App() {
  const { status, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.search);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(checkBookExpiry());
    },  6 * 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, [dispatch]);

   
useEffect(() => {
  const savedAuth = JSON.parse(localStorage.getItem('auth'));
  const savedUserId = localStorage.getItem('currentUserId');
 

  if (savedAuth?.status === AUTH_STATUSES.loggedIn && savedUserId) {
    dispatch(loadStateFromLocalStorage());
    const savedUserData = loadUserFromLocalStorage(savedUserId);
    if (savedUserData) {
      dispatch(setUser(savedUserData));
    } else {
      navigate(PATH.index);
    }
  } else {
    navigate(PATH.index);
  }
}, [dispatch, navigate]);

useEffect(() => {
  if (status === AUTH_STATUSES.loggedIn) { 
    dispatch(fetchHomeBooks());
  } else if (status === AUTH_STATUSES.loggedOut) {
    navigate(PATH.index);
  }
}, [status, user, dispatch, navigate]);

  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Loader />}>
        {status === AUTH_STATUSES.loggedIn ? (
          <>
            <Header label1="All books" label2="Your orders" account={true} />
            {loading ? <Loader /> : <Outlet />}
            <Footer />
          </>
        ) : (
          <>
            <Header label1="Log in" label2="Sign up" account={false} />
            <Main />
          </>
        )}
      </Suspense>
    </ThemeProvider>
  );
}

export default App;

