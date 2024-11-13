import React from "react";
import classNames from "classnames";
//styles
import { useCardStyles } from "./Card.styles";
//components
import { Container } from "../Container";
//img
import sprite from "../../img/sprite.svg";

export const Card = ({ dataHomes }) => {
  const classes = useCardStyles();
  const stars = Array(5).fill(0);

  const formatParagraphs  = (description) => {
      const paragraphs = description.split(/<\/?p>/);
      
      return (
          <div>
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
      )

  }
  

  return (
    <section>
      <Container>
        <div className={classes.container} id={dataHomes.id}>
          <div className={classes.imageWrapper}>
            <img className={classes.image} src={dataHomes.imageUrl} alt={dataHomes.name} />
          </div>
          
          <div className={classes.descrWrapper}>
            <div className={classes.starWrapper}>
              {stars.map((_, index) => (
                <svg key={index}>
                  <use href={`${sprite}#star`} />
                </svg>
              ))}
            </div>
            <h2 className={classes.bookTitle}>
              {dataHomes.name}
            </h2>
            <h3 className={classes.authorSubtitle}>
              {dataHomes.author}
            </h3>
            <span className={classes.bookDetails}>
              {dataHomes.length}, released in {dataHomes.released}
            </span>
            <button className={classes.btn}>Order</button>
         
            <h2 className={classes.descrTitle}>About book</h2>
            {formatParagraphs(dataHomes.description)}
           
            <button className={classNames(classes.btn, classes.btnSizeM)}>Show more</button>  
          </div>
        </div>      
      </Container>
    </section>
  );
};

