import { createUseStyles } from "react-jss";
import "../../fonts/fonts.css";

export const theme = {
  primaryAccent: "#ff5d4f",
  basicColor: "#000",
  baseСolorLight: "#fff",
  mutedAccent: "#616161",
  mutedSecondary: "b5b5b5",
  mainHighlight: "#85c8ee",
  backgroundColor: "#d3ebf9",
};

export const appStyles = {
  "*": {
    margin: 0,
  },
  "@global": {
    body: {
      fontFamily: '"OpenSans", sans-serif',
    },
  },
  font: {
    fontFamily: '"OpenSans", sans-serif',
  },
};

export const useAppStyles = createUseStyles(appStyles);
