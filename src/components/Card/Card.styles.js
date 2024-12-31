import { createUseStyles } from "react-jss";
import { theme } from "../App/App.styles";

const cardStyles = {
  wrapBookDetails: {
    backgroundColor: "#fff",
    padding: "32px 0 26px 0",
    marginBottom: "80px",
    borderRadius: "16px",
  },

  container: {
    display: "grid",
    paddingLeft: "32px",
    "@media (min-width: 1024px)": {
      gridTemplateColumns: "332px 1fr",
    },
    "@media (max-width: 768px)": {
      // display: 'flex',
      gridTemplateRows: " 1fr",
    },
  },

  imageWrapper: {
    width: "300px",
  },
  image: {
    width: "100%",
    borderRadius: "10px",
    objectFit: "cover",
  },
  descrWrapper: {
    paddingRight: "76px",
  },

  starWrapper: {
    display: "flex",
    width: "122px",
    maxHeight: "19px",
    marginBottom: "24px",
    marginLeft: "90px",

    "@media (max-width: 768px)": {},
    "& svg": {
      height: "25px",
      marginRight: "8px",
    },
    "& svg:last-child": {
      marginRight: "0",
    },
  },
  bookTitle: {
    color: "#000",
    fontSize: "40px",
    fontWeight: "900",
    marginBottom: "12px",
  },
  authorSubtitle: {
    color: "#FF5D4F",
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "24px",
  },
  bookDetails: {
    color: "#616161",
    fontSize: "18px",
    fontWeight: "300",
    lineHeight: "2.5",
  },
  btn: {
    display: "block",
    width: "185px",
    height: "46px",
    backgroundColor: "#B5B5B5",
    border: "1px solid #B5B5B5",
    borderRadius: "10px",
    cursor: "pointer",
    color: "#fff",
    fontSize: "20px",
    marginBottom: "59px",
  },
  btnSizeM: {
    width: "122px",
    height: "32px",
    fontSize: "12px",
  },
  btnOrder: {
    backgroundColor: "#FF5D4F",
    border: "1px solid #FF5D4F",
    color: "#fff",
  },
  btnReturn: {
    backgroundColor: "#B5B5B5",
    border: "1px solid #B5B5B5",
    color: "#fff",
  },

  descrTitle: {
    fontSize: "28px",
    fontWeight: "900",
    marginBottom: "12px",
  },
  book: {
    paddingTop: "120px",
    paddingBottom: "120px",
    backgroundColor: theme.homesBackgroundColor,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "20px",
  },
  descr: {
    display: "flex",
    flexDirection: "column",
    rowGap: "24px",
  },
  header: {
    color: theme.colorBtn,
    fontSize: "24px",
    fontWeight: "400",
  },
};

export const useCardStyles = createUseStyles(cardStyles);
