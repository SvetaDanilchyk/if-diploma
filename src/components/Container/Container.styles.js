import { createUseStyles } from "react-jss";

const ContainerStyles = {
  container: {
    maxWidth: "1230px",
    width: "100%",
    margin: " 0 auto",
  },
};

export const useContainerStyles = createUseStyles(ContainerStyles);
