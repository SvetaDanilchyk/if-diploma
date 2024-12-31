import React from "react";
//styles
import { useButtonStyles } from "./Button.styles";

export const Button = ({ name, disabled }) => {
  const classes = useButtonStyles();

  return (
    <button type="submit" className={classes.saveBtn} disabled={disabled}>
      {name}
    </button>
  );
};
