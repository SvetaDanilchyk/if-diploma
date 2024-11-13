import React from "react";
import classNames from "classnames";
import { useDispatch, useSelector  } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
 
//styles
import { useDropdownStyles } from "./Dropdown.styles";
//store
import { logout, setLoggingIn } from "../../store/slices/auth.slice";
//constans
import { PAGE, PATH } from "../../constans/paths";

export const Dropdown = () => {
 const classes = useDropdownStyles();
 const dispatch = useDispatch();
 const navigate = useNavigate();
 const userName = useSelector((state) => state.user.name);

 const handleLogout = () => {
  dispatch(logout());
  dispatch(setLoggingIn(false)); 
  navigate(PATH.index);
};


  return (
    <div className={classNames(classes.dropdown, classes.dropdownMenu)}>      
      <div>{userName ? `${userName}` : "User"}</div>  
      <Link to={PAGE.settings}> <div>Settings</div>  </Link>           
      <div>My orders</div>
      <div onClick={handleLogout} >Sign out</div>     
    </div>
  );
};