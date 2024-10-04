import { createUseStyles } from "react-jss";

const loaderStyles = {
  root: {
    display: "flex",
    justifyContent: "center",
    padding: "200px",
  },
  img: {
    height: "100px",
    width: "100px",
  },
};

export const useLoaderStyles = createUseStyles(loaderStyles);
