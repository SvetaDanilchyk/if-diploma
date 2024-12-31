import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  "@font-face": [
    {
      fontFamily: "Open Sans",
      fontWeight: 400,
      fontStyle: "normal",
      src: 'url("./OpenSans-Regular.woff2") format("woff2")',
    },
    {
      fontFamily: "Open Sans",
      fontWeight: 600,
      fontStyle: "normal",
      src: 'url("./OpenSans-SemiBold.woff2") format("woff2")',
    },
    {
      fontFamily: "Open Sans",
      fontWeight: 700,
      fontStyle: "normal",
      src: 'url("./OpenSans-Bold.woff2") format("woff2")',
    },
  ],
});

export default useStyles;
