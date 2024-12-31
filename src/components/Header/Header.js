import React, { useRef, useState } from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
//styles
import { useHeaderStyles } from "./Header.styles";
//components
import { Dropdown } from "../Dropdown";
import { Container } from "../Container";
import { Search } from "../Search";
import { LogInModal } from "../LogInModal/LogInModal";
//constans
import { PAGE, PATH } from "../../constans/paths";
//stoore
import { resetSearchResults } from "../../store/slices/search.slice";
//img
import sprite from "../../img/sprite.svg";

export const Header = ({ label1, label2, account }) => {
  const logInRef = useRef(null);
  const [isSignUp, setIsSignUp] = useState(false);
  const classes = useHeaderStyles();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLogoClick = () => {
    dispatch(resetSearchResults());
  };

  return (
    <>
      <Container>
        <header className={classes.header}>
          <NavLink
            key={PAGE.home}
            to={PATH.home}
            className={classNames(classes.logoButton)}
            onClick={handleLogoClick}
          >
            <svg>
              <use href={`${sprite}#logo`} />
            </svg>
          </NavLink>

          <div className={classes.searchWrap}>
            <Search />
          </div>
          <div
            className={` ${
              account ? classes.accountMenu : classes.accountMenuN
            }`}
          >
            <div
              className={classNames(
                classes.listSpecific,
                classes.list,
                classes.listDeactive,
              )}
            >
              <NavLink
                key="nav-link-login"
                onClick={() => {
                  if (label1 === "Log in") {
                    setIsSignUp(false);
                    logInRef.current.open();
                  }
                }}
                to={PATH.home}
                className={({ isActive }) =>
                  isActive
                    ? classNames(classes.buttonLink, classes.activeLink)
                    : classes.buttonLink
                }
              >
                {label1}
              </NavLink>

              <NavLink
                key="nav-link-signup"
                onClick={() => {
                  if (label2 === "Sign up") {
                    setIsSignUp(true);
                    logInRef.current.open();
                  }
                }}
                to={PATH.userOrders}
                className={({ isActive }) =>
                  isActive
                    ? classNames(classes.buttonLink, classes.activeLink)
                    : classes.buttonLink
                }
              >
                {label2}
              </NavLink>
            </div>

            {account && (
              <div
                className={` ${account ? classes.list : classes.accountMenuN}`}
              >
                <button className={classes.btn} onClick={handleButtonClick}>
                  <svg className={classes.iconAccount}>
                    <use href={`${sprite}#account`} />
                  </svg>
                </button>
                <button className={classes.btn} onClick={handleButtonClick}>
                  <svg className={classes.downArrow}>
                    <use href={`${sprite}#downArrow`} />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <Dropdown onCloseDropdown={() => setIsDropdownOpen(false)} />
                )}
              </div>
            )}
          </div>
        </header>
      </Container>
      <LogInModal signUp={isSignUp} ref={logInRef} />
    </>
  );
};
