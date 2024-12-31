import { createUseStyles } from "react-jss";

const dropdownStyles = {
  dropdown: {
    position: "relative",
    top: "50%",
    left: "50%",
    "@media (max-width: 1025px)": {
      //  marginTop: "100%",
      transform: "translate(-50%, -50%)",
    },
    "@media (max-width: 480px)": {
      left: "10%",
    },
  },
  dropdownMenu: {
    position: "absolute",
    top: "100%",
    right: "50%",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "10px 0",
    zIndex: 1,
    width: "169px",
    "@media (min-width: 1024px)": {
      height: "200px",
    },
    "@media (max-width: 1024px)": {
      right: "0%",
    },
  },
  dropdownItem: {
    display: "block",
    padding: "10px 15px",
    fontSize: "16px",
    color: "#555",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "#f5f5f5",
      color: "#000",
    },
  },
  dropdownItemDanger: {
    color: "#ff5d4f",
    fontWeight: "bold",
    textAlign: "center",
    "&:hover": {
      backgroundColor: "#ffe5e5",
    },
  },
  userName: {
    fontWeight: "bold",
    fontSize: "18px",
    padding: "20px 15px",
    marginBottom: "5px",
  },
  dropdownItemVisible: {
    display: "none",
    "@media (max-width: 480px)": {
      display: "block",
    },
  },
};

export const useDropdownStyles = createUseStyles(dropdownStyles);
