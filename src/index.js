import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

//store
import { persistor, store } from './store';
//routers
import { router } from "./routers";
//components
import { Loader } from "./components/Loader";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={<Loader/>} persistor={persistor}>
      <RouterProvider router={router} fallbackElement={<Loader/>} />
    </PersistGate>
  </Provider>,
);
reportWebVitals();
