import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//styles
import { useminCardStyles } from "./MinCard.styles";
//components
import { Button } from "../Button";
//store
import { addUserBook, addUserWaitingBook, removeUserBook } from "../../store/slices/books.slice";
//img
import sprite from "../../img/sprite.svg";


export const MinCard = ({ id, name, author, imageUrl, remainingDays, rating, status = "Available" }) => {
  const classes = useminCardStyles();
  const dispatch = useDispatch();
  const splitName = name?.split(":")[0];
  const userId = useSelector((state) => state.user.id);
  const userBooks = useSelector((state) => state.books.userBooks[userId] || []);
  const allUserBooks = useSelector((state) => state.books.userBooks);
  const waitingBooks = useSelector((state) => state.books.waitingBooks[userId] || []);

  const isBookTakenByCurrentUser = userBooks.some((book) => book.id === id && book.status === "Taken");
  const isBookInWaitingForCurrentUser = waitingBooks.some((book) => book.id === id);

  const isBookTakenByOthers =
    !isBookTakenByCurrentUser &&
    Object.keys(allUserBooks).some(
      (otherUserId) =>
        otherUserId !== userId &&
        Array.isArray(allUserBooks[otherUserId]) &&
        allUserBooks[otherUserId].some((book) => book.id === id && book.status === "Taken")
    );

  const currentStatus = isBookTakenByCurrentUser
    ? "Taken"
    : isBookInWaitingForCurrentUser
    ? "Waiting for"
    : isBookTakenByOthers
    ? "Available"
    : status;

  const changeStatus = () => {
    if (!id || !userId) {
      console.error("ID или userId отсутствует");
      return;
    }

    const newStatus = currentStatus === "Available" ? "Taken" : "Available";
    const newBook = { id, name, author, imageUrl, status: newStatus };

    if (newStatus === "Taken") {
      if (isBookTakenByOthers) {
        dispatch(addUserWaitingBook({ userId, book: { ...newBook, status: "Waiting for" } }));
      } else {
        dispatch(addUserBook({ userId, book: newBook }));
      }
    } else {
      dispatch(removeUserBook({ userId, bookId: id }));
    }
  };


  return (
    <div className={classes.container} id={id}>
      <Link to={`/bookDetails/${id}`}>
        <div className={classes.wrapperImg}>
          <img className={classes.image} src={imageUrl} alt={name} />
        </div>
      </Link>
      <div className={classes.wrapper}>
        <button className={classes.status}>{currentStatus}</button>
       {/*  <div>{remainingDays > 0 ? `${remainingDays} days` : "Expired"}</div> */}
       <div>
        {status === "Waiting for" && remainingDays > 0
          ? `${remainingDays} days`
          : status === "Waiting for"
          ? "Expired"
          : ""}
      </div>
        <h2 className={classes.bookTitle}>{splitName}</h2>
        <h3 className={classes.authorSubtitle}>by {author}</h3>
        <div className={classes.starWrapper}>
        {Array.from({ length: rating }, (_, index) => (
          <svg key={index}>
            <use href={`${sprite}#star`} />
          </svg>
        ))}
        </div>
        <Button className={classes.btn} onClick={changeStatus}>
          {currentStatus === "Available" ? "Order" : "Return"}
        </Button>
      </div>
    </div>
  );
};

