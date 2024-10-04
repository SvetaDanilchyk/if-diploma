import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//styles
import { useminCardStyles } from "./MinCard.styles"

//components
import { Button } from "../Button";

//img
import sprite from "../../img/sprite.svg";
//store
import { orderBook } from "../../store/slices/booksSlice.slice";

export const MinCard = ({ id, name, author, imageUrl }) => {
  const classes = useminCardStyles();
  const dispatch = useDispatch();
  const splitName = name.split(':')[0];
  const stars = Array(5).fill(0);
  const [isStatus, setIsStatus] = useState('Available'); 

  const { userBooks } = useSelector((state) => state.books);
  console.log('userBooks: ', userBooks);

  const changeStatus = () => {
    const newStatus = isStatus === 'Available' ? 'Taken' : 'Available';
    setIsStatus(newStatus);

    console.log('newStatus', newStatus);
    console.log('id', id);
    dispatch(orderBook({ id, name, author, imageUrl, status: newStatus }));
  };



  return (
 

        <div className={classes.container} id={id}>
          <Link to={`/bookDetails/${id}`}>
            <div className={classes.wrapperImg}>
              <img className={classes.image} src={imageUrl} alt={name} />
            </div>
          </Link>          
          <div className={classes.wrapper}>
            <button className={classes.status}>{isStatus}</button> {/* решить с Btn */}
            <div className={classes.need}></div>
            <h2 className={classes.bookTitle}>
              {splitName}
            </h2> 
            <h3 className={classes.authorSubtitle}>
              by {author}
            </h3>
            <div className={classes.starWrapper}>
              {stars.map((_, index) => (
                <svg key={index}>
                  <use href={`${sprite}#star`} />
                </svg>
              ))}
            </div>
            <Button className={classes.btn} onClick={changeStatus}>Order</Button>
          </div>          
        </div>    
  );
};

