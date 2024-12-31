import { createUseStyles } from "react-jss";

const userOrderStyles = {
  wrap: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: "16px",
    marginBottom: "80px",
    "&:nth-of-type(1)": {
      marginBottom: "36px",
    },
  },
  wrapperHeight: {
    minHeight: "400px",
  },
  title: {
    paddingLeft: "32px",
    paddingTop: "26px",
    fontSize: "20px",
  },
  message: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    color: "#B5B5B5",
    padding: "0 20px",
    fontSize: "24px",
    fontWeight: "600",
    minHeight: "400px",
    width: "100%",
  },
};

export const useUserOrderStyles = createUseStyles(userOrderStyles);
