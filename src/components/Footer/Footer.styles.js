import { createUseStyles } from "react-jss";

const footerStyles = () => ({
  footer: {
    minHeight: "200px",
    backgroundColor: "#D3EBF9",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
  wrap: {
    width: "185px",
    paddingRight: "24px",
    '&:last-child': {
      paddingRight: "0",
    }
  },
  contacts: {   
    display: "flex",
    justifyContent: "space-between",
    gap: "24px",   
    padding: "40px 0",
    '&:last-child': {
      paddingBottom: "0",
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
    '&:last-child': {
      paddingBottom: "0",
    },
  },
  contactsTitle: {
    display: "flex",
    color: "#000",
    fontSize: "18px",
    paddingBottom: "24px",
    fontWeight: "700",
  },
  
  logo: {
    display: "none",
  },
});

export const useFooterStyles = createUseStyles(footerStyles);
