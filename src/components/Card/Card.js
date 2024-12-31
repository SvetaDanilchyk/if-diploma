import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// styles
import { useCardStyles } from "./Card.styles";
// store
import { addUserBook, removeUserBook } from "../../store/slices/books.slice";
// components
import { Container } from "../Container";
// img
import sprite from "../../img/sprite.svg";

export const Card = ({ dataHomes }) => {
  const classes = useCardStyles();
  const dispatch = useDispatch();
  const [showFullDescription, setShowFullDescription] = useState(false);

  // Get the current user
  const userId = useSelector((state) => state.user.id);
  const userName = useSelector((state) => state.user.name);

  // Get the book status from Redux
  const book = useSelector((state) =>
    state.books.allBooks.find((b) => b.id === dataHomes.id),
  );

  const currentStatus = book?.status || "Available";

  const handleStatusChange = () => {
    if (!book) {
      dispatch(
        addUserBook({
          userId,
          book: {
            id: dataHomes.id,
            name: dataHomes.name,
            author: dataHomes.author,
            imageUrl: dataHomes.imageUrl,
            rating: dataHomes.rating,
            status: "Taken",
          },
          userName,
        }),
      );
    } else if (currentStatus === "Available") {
      dispatch(
        addUserBook({
          userId,
          book: { ...book, status: "Taken" },
          userName,
        }),
      );
    } else if (currentStatus === "Taken") {
      dispatch(removeUserBook({ userId, bookId: dataHomes.id }));
    }
  };

  //formatParagraphs
  const formatParagraphs = (description) => {
    const paragraphs = description
      .split(/<\/?p>|<br\s*\/?>/i)
      .map((paragraph) => paragraph.trim());

    // Display one paragraph
    if (paragraphs.length === 1) {
      const displayedText = showFullDescription
        ? paragraphs[0]
        : paragraphs[0].split(".")[0] + ".";
      return <p>{displayedText}</p>;
    }

    // Display the first or all paragraphs
    const displayedParagraphs = showFullDescription
      ? paragraphs
      : paragraphs.slice(0, 1);

    return (
      <div>
        {displayedParagraphs.map((paragraph, index) => (
          <p key={`paragraph-${index}`}>{paragraph}</p>
        ))}
      </div>
    );
  };

  const toggleDescription = () => {
    setShowFullDescription(true);
  };

  return (
    <section>
      <Container className={classes.wrapBookDetails}>
        <div className={classes.container} id={dataHomes.id}>
          <div className={classes.imageWrapper}>
            <img
              className={classes.image}
              src={dataHomes.imageUrl}
              alt={dataHomes.name}
            />
          </div>

          <div className={classes.descrWrapper}>
            <div className={classes.starWrapper}>
              {Array.from({ length: 5 }, (_, index) => (
                <svg
                  key={`star-${dataHomes.id}-${index}`}
                  style={{
                    color: index < dataHomes.rating ? "black" : "white",
                  }}
                >
                  <use href={`${sprite}#star`} />
                </svg>
              ))}
            </div>
            <div className={classes.bookTitle}>{dataHomes.name}</div>
            <div className={classes.authorSubtitle}>{dataHomes.author}</div>
            <span className={classes.bookDetails}>
              {dataHomes.length}, released in {dataHomes.released}
            </span>
            <button
              className={`${classes.btn} ${
                currentStatus === "Available"
                  ? classes.btnOrder
                  : classes.btnReturn
              }`}
              onClick={handleStatusChange}
            >
              {currentStatus === "Available" ? "Order" : "Return"}
            </button>

            <h2 className={classes.descrTitle}>About book</h2>

            {formatParagraphs(dataHomes.description)}
            {!showFullDescription && (
              <button
                className={`${classes.btn} ${classes.btnSizeM}`}
                onClick={toggleDescription}
              >
                Show more
              </button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
