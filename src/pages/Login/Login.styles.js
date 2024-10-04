import { createUseStyles } from "react-jss";
const loginStyles = {
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "120px",
  },
  logo: {
    width: "170px",
    height: "60px",
    marginBottom: "32px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    width: "320px",
    padding: "32px",
    border: "1px solid rgba(22, 24, 35, 0.12)",
    borderRadius: "8px",
    boxSizing: "content-box",
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
    lineHeight: " 48px",
    border: "1px solid rgba(22, 24, 35, 0.12)",
    borderRadius: " 4px",
    marginBottom: "16px",
    "&:last-of-type": {
      marginBottom: "40px",
    },
  },
  button: {
    height: "50px",
  },
};

export const useLoginStyles = createUseStyles(loginStyles);
