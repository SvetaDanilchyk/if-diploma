import React, { useRef, useState } from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

//styles
import { useHeaderStyles } from "./Header.styles";

//img
import sprite from "../../img/sprite.svg";

//components
import { Dropdown } from "../Dropdown";
import { Container } from "../Container";
import { Search } from "../Search";
import { Button } from "../Button";
import { LogInModal } from "../LogInModal/LogInModal";

//constans
import { PAGE, PATH } from "../../constans/paths";


export const Header = ({label1, label2, account}) => {
  const logInRef = useRef(null);
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const classes = useHeaderStyles();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  const handleButtonClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <>
    <header className={classes.header}>
      <Container className={classes.container} >
        <NavLink
          key={PAGE.home}
          to={PATH.home}
          className={classNames(classes.logoButton)}
        >
           <svg>
            <use href={`${sprite}#logo`} />
          </svg>
      </NavLink>
       <Search/>
       <div className={ account===false ? classNames(classes.listSpecific, classes.list) : classes.list}>
                <Button  
                  variant='text'
                  href='#'   
                  onClick={() => {
                    if(label1 === "Log in") {
                      setIsSignUp(false);
                      logInRef.current.open();
                    } else {
                      navigate(PATH.home);
                    } 

                  }}>
                  {label1}
                </Button>
                
                <Button  
                variant='text'
                href='#'   
                onClick={() => {
                  if(label2 === "Sign up") {
                    setIsSignUp(true);
                    logInRef.current.open()} 
                    else {
                      navigate(PATH.userOrders);
                    }
                }} >
                  {label2}
                </Button>

          {account && (
            <li className={classes.listItem}>
              <button className={classes.btn} onClick={handleButtonClick}>
                <svg className={classes.iconAccount}>
                  <use href={`${sprite}#account`} />
                </svg>
              </button>
              {isDropdownOpen && <Dropdown />}
              <button className={classes.btn}>
                <svg className={classes.downArrow}>
                  <use href={`${sprite}#downArrow`} />
                </svg>
              </button>
            </li>
            )}  
       </div>
      </Container>
    </header>
    <LogInModal signUp={isSignUp} ref={logInRef} />
  </>

)};
