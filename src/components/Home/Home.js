import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";

//styles
import { useHomeStyles } from "./Home.styles";

import { MinCard } from "../MinCard";
import { Container } from "../Container";
import { Button } from "../Button";


export const Home = () => {

  const classes = useHomeStyles();
  const [visibleBooks, setVisibleBooks] = useState(4);
  const { homeBooks, error } = useSelector((state) => state.search);

  const handleButtonClick = () => {
    setVisibleBooks((prev) => prev + 4);
  }

  const displayedBooks = useMemo(
    () => homeBooks.slice(0, visibleBooks),
    [homeBooks, visibleBooks]
  );

  
  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <article className={classes.root}>
      <Container>
        <div  className={classes.wrapper}>
          { displayedBooks.length > 0 ? (
            displayedBooks.map((data) => <MinCard key={data.id} {...data} />)
          ) : (
            <p>No books available</p>
          )}
        </div>
        {visibleBooks < homeBooks.length && (
          <div className={classes.warpBtn}>
            <button  className={classes.btnMore} onClick={handleButtonClick}>Show more</button>
         
            </div> /* <button className={classNames(classes.btn, classes.btnSizeM)} */
        )}
      </Container>     
    </article>
  );
};