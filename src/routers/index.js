import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// components
import App from "../components/App/App";
// constans
import { PAGE, PATH } from "../constans/paths";
//components
import { Home } from "../components/Home/Home";
// pages
import { BookDetails } from "../pages/BookDetails";
import { UserOrders } from "../pages/UserOrders";
import { PageSettings } from "../pages/PageSettings";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={PATH.index} element={<App />}>
      <Route path={PAGE.bookDetails} element={<BookDetails />} />
      <Route path={PAGE.home} element={<Home />} />
      <Route path={PAGE.userOrders} element={<UserOrders />} />
      <Route path={PAGE.settings} element={<PageSettings />} />
    </Route>,
  ),
);
