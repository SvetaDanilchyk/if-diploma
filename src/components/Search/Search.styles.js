
import { createUseStyles } from "react-jss";

const useSearchStyles = createUseStyles(() => ({
  search: {
    position: 'relative',
    marginRight: '146px',
    '& img': {
      position: 'absolute',
      height: '18px',
      width: '18px',
      top: '50%',
      left: '5%', 
    transform: 'translate(-50%, -50%)',
    },
    '& input': {
      width: '500px',
      height: '48px',
      border: '2px solid #B5B5B5',
      borderRadius: '10px',
      paddingInline: '50px',
  },
  
},
}));

export { useSearchStyles };