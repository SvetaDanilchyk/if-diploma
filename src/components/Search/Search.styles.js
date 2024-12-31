import { createUseStyles } from "react-jss";

const searchStyles = {
  search: {
    position: "relative",
    marginRight: "146px",
    "@media (max-width: 1024px)": {
      marginRight: "0",
    },
    "& img": {
      position: "absolute",
      height: "18px",
      width: "18px",
      top: "50%",
      left: "2%",
      transform: "translate(-50%, -50%)",
      "@media (min-width: 1024px)": {
        left: "5%",
      },
      "@media (max-width: 480px)": {
        left: " 5%",
      },
    },
    "& input": {
      width: "500px",
      fontSize: "16px",
      fontWeight: "400",
      height: "48px",
      border: "2px solid #B5B5B5",
      borderRadius: "10px",
      paddingInline: "50px",
      "&:focus": {
        outline: "none",
        border: "2px solid #FF5D4F",
      },
      "@media (max-width: 1024px)": {
        width: "100%",
        fontSize: "12px",
      },
    },
  },
};

export const useSearchStyles = createUseStyles(searchStyles);
