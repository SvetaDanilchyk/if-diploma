import { createUseStyles } from 'react-jss';

const minCardStyles = (theme) => ({
  
  container: {
    display: 'grid',
    gridTemplateColumns: '122px 1fr',
    gridTemplateRows: '185px',
    gap: '12px',
    alignItems: 'center', 
    width: '256px',
    height: '185px',
  }, 

  wrapperImg: {
    width: '122px',
    height: '185px',
  },  
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'space-between',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },

/*   container: {
    display: 'grid',
    columnGap: '12px',
    gridTemplateColumns: '122px 122px', // 122px 122px
  },  */

 /*  wrapper: {
    width: '122px',
  },  */
  /* wrapperImg: {
    width: '122px',
    height: '185px',
  }, */ 

/*   image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  }, */
  descrWrapper: {
    paddingRight: '76px',
  },
  starWrapper: {
    display: 'flex',
    width: '122px',
    marginBottom: '8px',
    '& svg': {
      height: '25px',
      marginRight:'8px',
    },
  },
  bookTitle: {
    color: '#000',
    fontSize: '14px',
    fontWeight: '900',
    marginBottom: '8px',
  },
  authorSubtitle: {
    color:'#616161',
    fontSize: '12px',
    fontWeight: '600',
    marginBottom: '10px',
  },
  bookDetails: {
    color:'#616161',
    fontSize: '18px',
    fontWeight: '300',
    lineHeight: '2.5',
  },
  status: {
    all: 'unset',
    height: '26px',
    padding: '0 5px',
    fontSize: '12px',
    borderRadius: '24px',
    border: '2px solid',
    borderColor: theme.mainHighlight,
    backgroundColor: '#ffffff',
    marginBottom: '8px',
    width: '100px',
  },
  need: {
    marginBottom: '8px',
  },
  btn: {
    display: 'block',
    width: '122px',
    height: '32px',
    backgroundColor: '#B5B5B5',
    border: '1px solid #B5B5B5',
    borderRadius: '10px',
    cursor: 'pointer',
    color: '#fff',
    fontSize: '20px',
  },

  descrTitle: {
    fontSize: '28px',
    fontWeight: '900',
    marginBottom: '12px',
  }, 



  book: {
    paddingTop: '120px',
    paddingBottom: '120px',
    backgroundColor: theme.homesBackgroundColor,
  }, 
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
  },
  descr: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '24px',
  },
  header: {
    color: theme.colorBtn,
    fontSize: '24px',
    fontWeight: '400',
  },

});

export const useminCardStyles = createUseStyles(minCardStyles);
