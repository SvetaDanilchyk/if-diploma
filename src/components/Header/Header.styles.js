import { createUseStyles } from "react-jss";

const useHeaderStyles = createUseStyles((theme) => ({
  header: {
    display: "flex",
    paddingTop: "30px",
    paddingBottom: "76px",
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    alignItems: 'center',
  },  
  logoButton: {
    background: "transparent",
    border: "0",
    cursor: "pointer",
    paddingRight: "96px", 
    '& svg' : {      
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
  listSpecific: {    
    justifyContent: "flex-end",
  }, 
  listItemSpecific: {    
    display: "flex",
    '&:nth-child(1)': {
      marginRight: "48px",
    },
    '&:last-child': { 
      marginRight: "0", 
    }
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
    '&:first-child': { 
      paddingRight: "13px", 
    }
  },  
 /* 
  menuDelimiter: {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    marginRight: "48px",
    "&:hover::after": {
      content: '""',
      position: "absolute",
      bottom: "-15px",
      left: "50%",
      transform: "translateX(-50%)",
      height: "4px",
      width: "60%",
      backgroundColor: theme.accentColor,
      border: "none",
      animation: "$delim 250ms",
    },
  },
  "@keyframes delim": {
    "0%": {
      top: "80%",
      opacity: 0,
    },
    "80%": {
      top: "100%",
      opacity: 0.7,
    },
    "100%": {
      opacity: 1,
    },
  }, */
}));

export { useHeaderStyles };
