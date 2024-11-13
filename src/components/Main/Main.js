import React, { useRef, useState } from "react";

//styles
import { useMainStyles } from "./Main.styles";
//components
import { Container } from "../Container";
import { LogInModal } from "../LogInModal/LogInModal";
//img
import mainImg from "../../img/mainImg.png";

export const Main = () => {
  const classes = useMainStyles();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const logInRef = useRef(null);

  const handleStartClick = () => {
    setShowLoginModal(true);
    if (logInRef.current) {
      logInRef.current.open(); 
    }
  };
 
 
  return (
   
      <Container>
        <section  className={classes.container}>
          <div className={classes.LibraryPromo}>
            <h2 className={classes.title}>BIld your library</h2>
            <h3 className={classes.descr}>Over 400.000 books from fiction to the business literature</h3>           
            <button className={classes.btn} onClick={handleStartClick}>Let’s start</button>           
          </div>
          <div className={classes.img}>
            <img src={mainImg} alt="library" />
          </div>
        </section>      
        <LogInModal ref={logInRef} show={showLoginModal} onClose={() => setShowLoginModal(false)} />   
      </Container>
    
  );
};

