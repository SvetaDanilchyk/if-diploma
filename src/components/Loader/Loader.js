import React from "react";
//styles
import { useLoaderStyles } from "./Loader.styles";
//img
import loadingImg from "../../img/loading.gif";

export const Loader = () => {
  const classes = useLoaderStyles();

  return (
    <div className={classes.root}>
      <img className={classes.img} src={loadingImg} alt="loading" />
    </div>
  );
};
