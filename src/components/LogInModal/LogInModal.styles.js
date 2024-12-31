import { createUseStyles } from "react-jss";

const loginModalStyles = {
  logIn: {
    display: "flex",
    flexDirection: "column",
    width: "320px",
  },
  label: {
    marginBottom: "4px",
    fontSize: "14px",
    fontWeight: "500",
  },
  textField: {
    backgroundColor: "rgba(22, 24, 35, 0.06)",
    padding: "0 16px",
    fontSize: "18px",
    lineHeight: "48px",
    border: "1px solid rgba(22, 24, 35, 0.12)",
    borderRadius: "4px",
    marginBottom: "16px",
    "&:last-of-type": {
      marginBottom: "40px",
    },
  },
  btn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto ",
    backgroundColor: "#FF5D4F",
    color: "#fff",
    width: "122px",
    height: "32px",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#fa867c",
    },
  },
  errorMessage: {
    color: "red",
  },
};

export const useLoginModalStyles = createUseStyles(loginModalStyles);
