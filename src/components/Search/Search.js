import React from 'react';
import { Form  } from 'react-router-dom';

//styles
import { useSearchStyles } from './Search.styles.js';
//img
import loupe from '../../icons/header/loupe.png';

export const Search = () => {
  const classes = useSearchStyles();

  return (
      <div className={classes.search}>
            <img
              src={loupe}
              alt="loupe"
            />
            <input
              type="search"
              name="searchBook"
              placeholder="Search by author, title, name"
            />
      </div>

  );
};

    /* <Form  className="search" method="get" > 
          <div className={classes.search}>
              <img
                src={loupe}
                alt="loupe"
              />
              <input
                type="search"
                name="searchBook"
                placeholder="Search by author, title, name"
              />
          </div>
  /*   </Form> */