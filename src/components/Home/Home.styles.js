import { createUseStyles } from "react-jss";
import { theme } from "../App/App.styles";

const homeStyles = {
  booksSection: {
    backgroundColor: "#FFFFFF",
    borderRadius: "16px",
    marginBottom: "40px",
  },
  wrapper: {
    display: "grid",
    padding: "20px 42px 0 32px ",
    marginBottom: "36px",
    minHeight: "256px",
    columnGap: "44px",
    rowGap: "48px",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    backgroundColor: "#FFFFFF",
    borderRadius: "16px",
    "@media (max-width: 1024px)": {
      gridTemplateColumns: "1fr 1fr",
      justifyItems: "center",
    },
    "@media (max-width: 480px)": {
      gridTemplateColumns: "1fr",
    },
  },
  header: {
    display: "flex",
    paddingTop: "30px",
    paddingBottom: "76px",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    alignItems: "center",
  },
  title: {
    fontSize: "20px",
    fontWeight: "700",
    paddingLeft: "32px",
  },
  logoButton: {
    background: "transparent",
    border: "0",
    cursor: "pointer",
    paddingRight: "96px",
    "& svg": {
      width: "172px",
      height: "32px",
    },
  },
  list: {
    listStyleType: "none",
    display: "flex",
    alignItems: "center",
    margin: "0",
    padding: "0",
  },
  listItem: {
    display: "flex",
    marginRight: "16px",
    "&:nth-child(2)": {
      marginRight: "48px",
    },
    "&:last-child": {
      marginRight: "0",
    },
  },
  menuText: {
    textDecoration: "none",
    color: "#000",
    fontSize: "16px",
    fontWeight: "600",
  },
  iconAccount: {
    width: "36px",
    height: "36px",
  },
  downArrow: {
    width: "16px",
    height: "9px",
    cursor: "pointer",
  },
  btn: {
    all: "unset",
    boxSizing: "border-box",
    "&:first-child": {
      paddingRight: "13px",
    },
  },
  warpBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btnMore: {
    display: "block",
    width: "185px",
    height: "48px",
    backgroundColor: theme.primaryAccent,
    border: "1px solid",
    borderRadius: "10px",
    cursor: "pointer",
    color: "#fff",
    fontSize: "20px",
    marginBottom: "26px",
  },
};

export const useHomeStyles = createUseStyles(homeStyles);
