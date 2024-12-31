import { createUseStyles } from "react-jss";

export const buttonStyles = {
  saveBtn: {
    backgroundColor: "#FF5D4F",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "10px",
    fontSize: "16px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#fa867c",
    },
  },
};
export const useButtonStyles = createUseStyles(buttonStyles, {
  name: "Button",
  index: 0,
});
