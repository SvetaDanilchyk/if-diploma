import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//styles
import { useMinCardStyles } from "./MinCard.styles";
//store
import {
  addUserBook,
  addUserWaitingBook,
  removeUserBook,
} from "../../store/slices/books.slice";
//img
import sprite from "../../img/sprite.svg";

export const MinCard = ({
  id,
  name,
  bookholder,
  author,
  imageUrl,
  remainingDays,
  rating,
  status = "Available",
}) => {
  const classes = useMinCardStyles();
  const dispatch = useDispatch();
  const splitName = name?.split(":")[0];
  const userId = useSelector((state) => state.user.id);
  const userName = useSelector((state) => state.user.name);
  const userBooks = useSelector((state) => state.books.userBooks[userId] || []);
  const allUserBooks = useSelector((state) => state.books.userBooks);
  const waitingBooks = useSelector(
    (state) => state.books.waitingBooks[userId] || [],
  );
  const [localBookholder, setLocalBookholder] = useState(bookholder || null);

  // Update localBookholder when userName changes
  useEffect(() => {
    if (userBooks.some((book) => book.id === id && book.status === "Taken")) {
      setLocalBookholder(userName);
    }
  }, [userName, userBooks, id]);

  // Check if the book is taken by the current user
  const isBookTakenByCurrentUser = userBooks.some(
    (book) => book.id === id && book.status === "Taken",
  );
  // Check if the book is pending for the current user
  const isBookInWaitingForCurrentUser = waitingBooks.some(
    (book) => book.id === id,
  );

  // Check if the book is borrowed by another user
  const isBookTakenByOthers =
    !isBookTakenByCurrentUser &&
    Object.keys(allUserBooks).some(
      (otherUserId) =>
        otherUserId !== userId &&
        Array.isArray(allUserBooks[otherUserId]) &&
        allUserBooks[otherUserId].some(
          (book) => book.id === id && book.status === "Taken",
        ),
    );

  // Determine the current status of the book
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
    const newBook = { id, name, rating, author, imageUrl, status: newStatus };

    if (newStatus === "Taken") {
      if (isBookTakenByOthers) {
        // If the book has already been borrowed by another user, add it to the waiting list
        dispatch(
          addUserWaitingBook({
            userId,
            book: { ...newBook, status: "Waiting for" },
          }),
        );
      } else {
        dispatch(addUserBook({ userId, book: newBook, userName }));
      }
    } else {
      // If the status changes to "Available", remove the book from the user's list
      dispatch(removeUserBook({ userId, bookId: id }));
      setLocalBookholder(null);
    }
  };

  return (
    <div className={classes.container} id={id}>
      <Link to={`/bookDetails/${id}`} className={classes.wrapperImg}>
        <img className={classes.image} src={imageUrl} alt={name} />
      </Link>
      <div className={classes.wrapper}>
        <button className={classes.status}>{currentStatus}</button>
        {localBookholder && (
          <div className={classes.bookholder}>
            Bookholder: {localBookholder}
          </div>
        )}
        <div>
          {status === "Waiting for" && remainingDays > 0
            ? `${remainingDays} days`
            : status === "Waiting for"
              ? "Expired"
              : ""}
        </div>
        <div className={classes.bookTitle}>{splitName}</div>
        <div className={classes.authorSubtitle}>by {author}</div>
        <div className={classes.starWrapper}>
          {Array.from({ length: 5 }, (_, index) => (
            <svg
              key={index}
              style={{ color: index < rating ? "black" : "white" }}
            >
              <use href={`${sprite}#star`} />
            </svg>
          ))}
        </div>
        <button className={classes.btn} onClick={changeStatus}>
          {currentStatus === "Available" ? "Order" : "Return"}
        </button>
      </div>
    </div>
  );
};
