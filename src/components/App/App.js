import React, { Suspense, useEffect } from 'react';
import { ThemeProvider } from 'react-jss';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
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

//constans
import { AUTH_STATUSES } from '../../constans/authStatuses';
import { PATH } from '../../constans/paths';

function App() { 
  
const { status } = useSelector((state) => state.auth);
const navigate = useNavigate();
const location = useLocation();
const dispatch = useDispatch();
const { loading } = useSelector((state) => state.search);

useEffect(() => {
  if (status !== AUTH_STATUSES.loggedIn && location.pathname !== PATH.index) {
    navigate(PATH.index);
  } else if (status === AUTH_STATUSES.loggedIn) {
    dispatch(fetchHomeBooks());
  }
}, [status, navigate, location, dispatch]);

return (
  <ThemeProvider theme={theme}>
    <Suspense fallback={<Loader />}>
      {status === AUTH_STATUSES.loggedIn ? (
        <>
          <Header label1="All books" label2="Your orders" account={true}/>
          {loading ? <Loader /> : <Outlet />} 
          <Footer/>
        </>
       
      ) : (
        <>
          <Header label1="Log in" label2="Sign up" account={false}/>
          <Main/>
        </>
      )}
    </Suspense>
  </ThemeProvider>
);
}

export default App;
