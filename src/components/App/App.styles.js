import { createUseStyles } from "react-jss";

export const theme = {
  primaryAccent: "#ff5d4f",
  basicColor: "#000",
  baseСolorLight: "#fff",
  mutedAccent: "#616161",
  mutedSecondary: "b5b5b5",
  mainHighlight: "#85c8ee",
  backgroundColor: "#d3ebf9",
  colWidth: "calc(100% / 12)",
};

export const appStyles = {
  "*": {
    margin: 0,
    boxSizing: "border-box",
    fontFamily: '"Roboto", sans-serif',
  },
  font: {
    fontFamily: "Roboto, sans-serif",
  },
};

export const useAppStyles = createUseStyles(appStyles);
