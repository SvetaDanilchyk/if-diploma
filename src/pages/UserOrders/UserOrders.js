import React from "react";
import { useSelector } from "react-redux";
//styles
import { useHomeStyles } from "../../components/Home/Home.styles";
//components
import { Container } from "../../components/Container";
import { MinCard } from "../../components/MinCard";

const getRemainingDays = (takenDate) => {
  const now = Date.now();
  const takenTime = new Date(takenDate).getTime();
  const daysPassed = Math.floor((now - takenTime) / (1000 * 60 * 60 * 24));
  const daysLeft = 20 - daysPassed;
  return daysLeft > 0 ? daysLeft : 0;
};

export const UserOrders = () => {
  const { id: userId } = useSelector((state) => state.user);
  const userBooks = useSelector((state) => state.books.userBooks[userId] || []);
  const waitingBooks = useSelector((state) => state.books.waitingBooks[userId] || []);
  const classes = useHomeStyles();
  const takenBooks = userBooks.filter((book) => book.status === "Taken");

  return (
    <div>
      <h2>Waiting for</h2>
      <Container className={classes.wrapper}>
        {waitingBooks.length > 0 ? (
          waitingBooks.map((book, index) => (
            <MinCard
              key={index}
              id={book.id}
              name={book.name}
              author={book.author}
              imageUrl={book.imageUrl}
              status={book.status}
              remainingDays={getRemainingDays(book.takenDate)}
            />
          ))
        ) : (
          <p>No books in the waiting list</p>
        )}
      </Container>

      <h2>List of your books</h2>
      <Container className={classes.wrapper}>
        {takenBooks.length > 0 ? (
          takenBooks.map((data) => (
            <MinCard
              key={data.id}
              {...data}
              remainingDays={getRemainingDays(data.takenDate)}
            />
          ))
        ) : (
          <p>No books available</p>
        )}
      </Container>
    </div>
  );
};

