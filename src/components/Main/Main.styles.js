import { createUseStyles } from "react-jss";

const MainStyles = (theme) => ({
  container: {
    display: 'grid',
    minHeight: "494px",
    gridTemplateColumns: '1fr 1fr',
    padding: '0 80px',
    backgroundColor: theme.backgroundColor,
    borderRadius: '10px',
  }, 
  LibraryPromo: {
    padding: "100px 0",
  },
  title: {
    fontSize: "38px",
    fontWeight: "700",
    marginBottom: "40px",
  },
  descr: {
    fontSize: "28px",
    maxWidth: "314px",
    fontWeight: "600",
    marginBottom: "40px",
  },
  btn: {
    display: 'block',
    width: '185px',
    height: '46px',
    backgroundColor: theme.primaryAccent,
    border: '1px solid #B5B5B5',
    borderRadius: '10px',
    cursor: 'pointer',
    color: theme.baseСolorLight,
    fontSize: "20px",
    marginBottom: '59px',
  },
  img: {
    width: '100%',
    objectFit: 'cover',
    margin: "68px 0",
  },
});

export const useMainStyles = createUseStyles(MainStyles);
