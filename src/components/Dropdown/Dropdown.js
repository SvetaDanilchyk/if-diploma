import React from "react";
import classNames from "classnames";
 
//styles
import { useDropdownStyles } from "./Dropdown.styles";
/*
//store
import { logout } from "../../store/slices/auth.slice";
import { resetSearchResults } from "../../store/slices/search.slice"; */

export const Dropdown = () => {
 const classes = useDropdownStyles();
 /*   const dispatch = useDispatch();

  const handleLogout = useCallback(() => {
    dispatch(logout());
    dispatch(resetSearchResults());
  }, [dispatch]); */

  return (
    <div
      /* onClick={handleLogout} */
      className={classNames(classes.dropdown, classes.dropdownMenu)}
    >
      Sign out
    </div>
  );
};
