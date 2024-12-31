import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

//styles
import { useDropdownStyles } from "./Dropdown.styles";
//store
import { logout } from "../../store/slices/auth.slice";
//constans
import { PAGE, PATH } from "../../constans/paths";
import classNames from "classnames";
import { resetUser } from "../../store/slices/user.slice";

export const Dropdown = ({ onCloseDropdown }) => {
  const classes = useDropdownStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector((state) => state.user.name);

  const handleLogout = () => {
    dispatch(resetUser());
    dispatch(logout());
    navigate(PATH.index);
    onCloseDropdown();
  };

  return (
    <div className={classes.dropdown}>
      <div className={classes.dropdownMenu}>
        <div className={classes.userName}>
          {userName ? `${userName}` : "User"}
        </div>
        <Link
          to={PAGE.settings}
          className={classes.dropdownItem}
          onClick={onCloseDropdown}
        >
          Settings
        </Link>
        <hr />
        <Link
          to={PAGE.userOrders}
          className={classes.dropdownItem}
          onClick={onCloseDropdown}
        >
          My orders
        </Link>
        <div
          className={classNames(
            classes.dropdownItem,
            classes.dropdownItemDanger,
          )}
          onClick={handleLogout}
        >
          Log out
        </div>
      </div>
    </div>
  );
};
