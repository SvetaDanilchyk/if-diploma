import { createUseStyles } from "react-jss";
import { theme } from "../App/App.styles";

const MainStyles = {
  container: {
    display: "grid",
    minHeight: "494px",
    padding: "0 80px",
    backgroundColor: theme.backgroundColor,
    borderRadius: "10px",
    "@media (min-width: 1024px)": {
      gridTemplateColumns: "1fr 1fr",
    },
    "@media (max-width: 768px)": {
      padding: "0 16px",
      gridTemplateRows: "0.5fr 1fr",
    },
  },
  LibraryPromo: {
    padding: "100px 0",
    "@media (max-width: 768px)": {
      padding: "40px 0",
    },
  },
  title: {
    fontSize: "38px",
    fontWeight: "700",
    marginBottom: "40px",
    padding: "100px 0",
    "@media (max-width: 1024px)": {
      textAlign: "center",
      padding: "40px 0",
    },
    "@media (max-width: 768px)": {
      textAlign: "center",
      padding: "0",
    },
  },
  descr: {
    fontSize: "28px",
    fontWeight: "600",
    marginBottom: "40px",
    "@media (min-width: 1024px)": {
      maxWidth: "314px",
    },
    "@media (max-width: 768px)": {
      textAlign: "center",
      padding: "0",
    },
  },
  btn: {
    display: "block",
    width: "185px",
    height: "46px",
    backgroundColor: theme.primaryAccent,
    border: "1px solid #B5B5B5",
    borderRadius: "10px",
    cursor: "pointer",
    color: theme.baseСolorLight,
    fontSize: "20px",
    marginBottom: "59px",
    "@media (max-width: 1024px)": {
      margin: "0 auto",
      marginBottom: "0",
    },
  },
  imgWrapper: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    objectFit: "cover",
    margin: "68px 0",
    "& img": {
      "@media (max-width: 480px)": {
        width: "100%",
      },
    },
  },
};

export const useMainStyles = createUseStyles(MainStyles);
