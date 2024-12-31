import { createUseStyles } from "react-jss";

const footerStyles = {
  footer: {
    minHeight: "200px",
    backgroundColor: "#D3EBF9",
    marginTop: "auto",
    "@media (max-width: 478px)": {
      display: "grid",
    },
  },
  container: {
    display: "flex",
    marginBottom: "0",
    "@media (min-width: 748px)": {
      justifyContent: "space-between",
    },
    "@media (max-width: 480px)": {
      display: "grid",
      justifyItems: "center",
    },
  },
  wrap: {
    "@media (min-width: 1024px) and (max-width: 768px) ": {
      width: "185px",
      paddingRight: "24px",
    },
    "&:last-child": {
      paddingRight: "0",
    },
  },
  contacts: {
    display: "grid",
    gap: "24px",
    padding: "40px 20px",
    justifyContent: "start",
    "&:last-child": {
      paddingBottom: "0",
    },
    "@media (min-width: 1024px)": {
      gridTemplateColumns: "185px 185px 185px",
    },
    "@media (max-width: 1024px)": {
      gridTemplateColumns: "1fr 1fr 1fr",
    },
    "@media (max-width: 480px)": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "40px 0 0 0",
    },
  },
  contactsDescr: {
    display: "flex",
    flexDirection: "column",
    fontWeight: "400",
    color: "#000",
    textDecoration: "none",
    fontSize: "16px",
    paddingBottom: "8px",
    "&:hover": {
      color: "#c4c4c4",
    },
    "&:last-child": {
      paddingBottom: "0",
    },
  },
  footerSocial: {
    "@media (max-width: 480px)": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  contactsTitle: {
    display: "flex",
    color: "#000",
    fontSize: "18px",
    paddingBottom: "24px",
    fontWeight: "700",
  },
  icons: {
    display: "inline-block",
    marginRight: "8px",

    paddingLeft: "20px",
    "@media (max-width: 1024px)": {
      marginRight: "0",
    },
    "@media (max-width: 480px)": {
      display: "flex",
      margin: "20px 10px 0",
    },
  },
  logo: {
    display: "none",
  },
};

export const useFooterStyles = createUseStyles(footerStyles);
