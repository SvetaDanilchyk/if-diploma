import { createUseStyles } from 'react-jss';

export const buttonStyles = (theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100,
    height: 32,
    padding: '0 16px',
    backgroundColor: '#f1f1f2',
    color: '#1c1c1c',
    fontSize: 16,
    fontWeight: 500,
    textDecoration: 'none',
    borderRadius: 4,
    cursor: 'pointer',
  },  
  primaryAccent: {
    backgroundColor: '#272790',
    color: '#ffffff',
  },
  text: {
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
    fontSize: 20,

    '&:hover': {
      color: theme.primaryAccent,
    },
  },

});

export const useButtonStyles = createUseStyles(buttonStyles, { name: 'Button', index: 0 });
