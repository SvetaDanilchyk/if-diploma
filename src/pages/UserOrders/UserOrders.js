import React from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";
// styles
import { useHomeStyles } from "../../components/Home/Home.styles";
import { useUserOrderStyles } from "./UserOrders.styles";
// components
import { Container } from "../../components/Container";
import { MinCard } from "../../components/MinCard";
// selectors
import {
  selectUserBooks,
  selectWaitingBooks,
} from "../../store/slices/books.slice";

const getRemainingDays = (takenDate, maxDays = 20) => {
  const now = Date.now();
  const takenTime = new Date(takenDate).getTime();
  const daysPassed = Math.floor((now - takenTime) / (1000 * 60 * 60 * 24));
  const daysLeft = maxDays - daysPassed;
  return daysLeft > 0 ? daysLeft : 0;
};

export const UserOrders = () => {
  const classes = useHomeStyles();
  const classesOrders = useUserOrderStyles();
  const userId = useSelector((state) => state.user.id);
  const waitingBooks = useSelector((state) =>
    selectWaitingBooks(state, userId),
  );
  const userBooks = useSelector((state) => selectUserBooks(state, userId));

  const takenBooks = React.useMemo(
    () => userBooks.filter((book) => book.status === "Taken"),
    [userBooks],
  );

  return (
    <>
      <Container className={classesOrders.wrap}>
        <h2 className={classesOrders.title}>Waiting for</h2>
        {waitingBooks.length > 0 ? (
          <div
            className={classNames(classes.wrapper, classesOrders.wrapperHeight)}
          >
            {waitingBooks.map((book) => (
              <MinCard
                key={`${book.id}-waiting`}
                {...book}
                remainingDays={getRemainingDays(book.takenDate)}
              />
            ))}
          </div>
        ) : (
          <p className={classesOrders.message}>
            Oops! You are not waiting for any book
          </p>
        )}
      </Container>

      <Container className={classesOrders.wrap}>
        <h2 className={classesOrders.title}>List of your books</h2>
        {takenBooks.length > 0 ? (
          <div
            className={classNames(classes.wrapper, classesOrders.wrapperHeight)}
          >
            {takenBooks.map((data) => (
              <MinCard
                key={`${data.id}-taken`}
                {...data}
                remainingDays={getRemainingDays(data.takenDate)}
              />
            ))}
          </div>
        ) : (
          <p className={classesOrders.message}>
            Oops! You haven't added any book yet
          </p>
        )}
      </Container>
    </>
  );
};
