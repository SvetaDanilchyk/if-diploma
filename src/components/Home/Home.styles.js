import { createUseStyles } from "react-jss";

const useHomeStyles = createUseStyles((theme) => ({
  wrapper: {
    display: "grid",
    
    columnGap: "44px",
    rowGap: "48px",

    gridTemplateColumns: "1fr 1fr 1fr 1fr",
  },
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
  listItem: {    
    display: "flex",
    marginRight: "16px",
    '&:nth-child(2)': {
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
  warpBtn: {
    display: 'flex',
    justifyContent: 'center',
  },
  btnMore: {
    display: 'block',
    width: '185px',
    height: '48px',
    backgroundColor: theme.primaryAccent,
    border: '1px solid',
    borderRadius: '10px',
    cursor: 'pointer',
    color: '#fff',
    fontSize: "20px",
    marginBottom: '76px',
  }
}));

export { useHomeStyles };
