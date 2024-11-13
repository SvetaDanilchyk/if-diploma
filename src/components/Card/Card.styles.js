import { createUseStyles } from "react-jss";

const cardStyles = (theme) => ({
 
  
  container: {
    display: 'grid',
    gridTemplateColumns: '332px 1fr',
    paddingLeft: '32px',
  }, 

  imageWrapper: {
    width: '300px',
  },  
  image: {
    width: '100%',
    objectFit: 'cover',
  },
  descrWrapper: {
    paddingRight: '76px',
  },
  starWrapper: {
    display: 'flex',
    width: '160px',
    marginBottom: '24px',
    '& svg': {
      height: '25px',
      marginRight:'8px',
    },
  },
  bookTitle: {
    color: '#000',
    fontSize: "40px",
    fontWeight: "900",
    marginBottom: "12px",
  },
  authorSubtitle: {
    color:'#FF5D4F',
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "24px",
  },
  bookDetails: {
    color:'#616161',
    fontSize: "18px",
    fontWeight: "300",
    lineHeight: '2.5',
  },
  btn: {
    display: 'block',
    width: '185px',
    height: '46px',
    backgroundColor: '#B5B5B5',
    border: '1px solid #B5B5B5',
    borderRadius: '10px',
    cursor: 'pointer',
    color: '#fff',
    fontSize: "20px",
    marginBottom: '59px',
  },
  btnSizeM: {
    width: '122px',
    height: '32px',
    fontSize: "12px",
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

});

export const useCardStyles = createUseStyles(cardStyles);
