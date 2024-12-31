import { createUseStyles } from "react-jss";

const headerStyles = {
  header: {
    display: "flex",
    padding: "0 10px",
    marginTop: "30px",
    marginBottom: "80px",
    justifyContent: "space-between",
    "@media (max-width: 1024px)": {
      marginBottom: "20px",
      flexWrap: "wrap",
    },
    "@media (max-width: 480px)": {
      flexWrap: "wrap",
    },
  },
  container: {
    display: "flex",
    // gridTemplateColumns: '1fr 1fr 1fr',
    alignItems: "center",
    margin: "0 auto",
    padding: "0 20px",
    "@media (max-width: 1024px)": {
      width: "90%",
      // gridTemplateColumns: '1fr 1fr',
    },
  },
  a: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    margin: 0,
    border: "none",
    textDecoration: "none",
    width: "32px",
    height: "32px",
  },
  logoButton: {
    display: "inline-flex",
    textDecoration: "none",
    alignItems: "center",
    width: "172px",
    border: "none",
    cursor: "pointer",
    paddingRight: "96px",
    "& svg": {
      height: "32px",
    },
    "@media (max-width: 1024px)": {
      paddingRight: "56px",
      order: 0,
    },
    "@media (max-width: 480px)": {
      width: "146px",
    },
  },
  buttonLink: {
    display: "inline-block",
    paddingRight: "32px",
    whiteSpace: "nowrap",
    textDecoration: "none",
    width: "auto",
    fontSize: "20px",
    fontWeight: "700",
    textAlign: "center",
    color: "#000",
    "&:hover": {
      color: "#ff5d4f",
    },
    "&:last-child": {
      paddingRight: "0",
    },
    "@media (max-width: 768px)": {
      fontSize: "20px",
    },
  },
  activeLink: {
    color: "#ff5d4f",
    fontWeight: "bold",
  },
  list: {
    display: "flex",
    // gridTemplateColumns: '1fr 1fr 1fr',
    justifyContent: "flex-end",
    alignItems: "center",
    margin: 0,
    padding: 0,
    listStyle: "none",
    "@media (max-width: 1024px)": {
      paddingRight: "56px",
      order: 2,
    },
    "@media (max-width: 480px)": {
      paddingRight: 0,
      "&:first-child": {
        paddingRight: "30px",
      },
    },
  },
  listItemSpecific: {
    display: "flex",
    "&:nth-child(1)": {
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
  SpecificStyleText: {
    fontSize: "20px",
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
    width: "100%",
    "&:first-child": {
      padding: "17px 17px 17px 48px",
    },

    "@media (max-width: 768px)": {
      "&:first-child": {
        padding: "17px 17px 17px 17px",
      },
    },
  },
  accountMenu: {
    //   position: 'relative',
    display: "flex",
    // gridTemplateColumns: '1fr 1fr',
  },
  accountMenuN: {
    display: "flex",
    // gridTemplateColumns: '1fr ',
  },
  viseble: {
    display: "none",
    "@media (max-width: 1024px)": {
      display: "flex",
      paddingLeft: "46px",
      marginTop: "20px",
    },
  },
  anviseble: {
    display: "block",
    "@media (max-width: 1024px)": {
      display: "none",
    },
    listAnvisible: {
      display: "block",
      "@media (max-width: 480px)": {
        display: "none",
      },
    },
  },
  searchWrap: {
    display: "block",
    alignItems: "center",
    width: "100%",
    "@media (max-width: 1024px)": {
      //width: 'calc((100% / 3) * 3)',
      marginTop: "40px",
      order: 1,
    },
    "@media (max-width: 480px)": {
      marginTop: "10px",
    },
  },
};

export const useHeaderStyles = createUseStyles(headerStyles);
