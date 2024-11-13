import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
//styles
import { useHomeStyles } from "./Home.styles";
//components
import { MinCard } from "../MinCard";
import { Container } from "../Container";


export const Home = () => {
  const classes = useHomeStyles();
  const [visibleBooks, setVisibleBooks] = useState(4);
  const { homeBooks, searchResults, searchFlag, error } = useSelector((state) => state.search);

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
      {searchFlag ? (
          <div className={classes.wrapper}>
            {searchResults.length > 0 ? (
                searchResults.map((data) => <MinCard key={data.id} {...data} />)
            ) : (
              <p>No search results found</p>
            )}
           
          </div>
        ) : (
          <div className={classes.wrapper}>
            {displayedBooks.length > 0 ? (
              displayedBooks.map((data) => <MinCard key={data.id} {...data} />)
            ) : (
              <p>No books Homes available</p>
            )}
            {visibleBooks < homeBooks.length && (
              <div className={classes.warpBtn}>
                <button className={classes.btnMore} onClick={handleButtonClick}>
                  Show more
                </button>
              </div>
            )}
          </div>
        )}
      </Container>
    </article>
  );
};