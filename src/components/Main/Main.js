import React from "react";

//styles
import { useMainStyles } from "./Main.styles";

//components
import { Container } from "../Container";

//img
import mainImg from "../../img/mainImg.png";

export const Main = () => {
  const classes = useMainStyles();
 
  return (
   
      <Container>
        <section  className={classes.container}>
          <div className={classes.LibraryPromo}>
            <h2 className={classes.title}>BIld your library</h2>
            <h3 className={classes.descr}>Over 400.000 books from fiction to the business literature</h3>
            <button className={classes.btn}>Let’s start</button>
          </div>
          <div className={classes.img}>
            <img src={mainImg} alt="library" />
          </div>
        </section>         
      </Container>
    
  );
};

