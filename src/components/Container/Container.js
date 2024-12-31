import React from "react";
import classNames from "classnames";
//styles
import { useContainerStyles } from "./Container.styles.js";

export const Container = ({ children, className }) => {
  const classes = useContainerStyles();

  return (
    <div className={classNames(classes.container, className)}>{children}</div>
  );
};
