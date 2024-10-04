import React from "react";
import { useSelector } from "react-redux";

import { useHomeStyles } from "../../components/Home/Home.styles";
import { Container } from "../../components/Container";
import { MinCard } from "../../components/MinCard";

export const UserOrders = () => {
  const { userBooks } = useSelector((state) => state.books);
  console.log('userBooks: ', userBooks);
  /* 
  
  const { homeBooks } = useSelector((state) => state.search); */
  const classes = useHomeStyles();

  if (!userBooks || userBooks.length === 0) {
    return <p>No books in your order list</p>;
  }
  return (
    <div>
      <h2>Your Ordered Books</h2>
      <Container className={classes.wrapper}>
        { userBooks.length > 0 ? (
          userBooks.map((data) => <MinCard key={data.id} {...data} />)
        ) : (
          <p>No books available</p>
        )}
      </Container>   
    </div>
  );
};
