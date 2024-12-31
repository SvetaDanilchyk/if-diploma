import { createUseStyles } from "react-jss";

const modalStyles = {
  modalMask: {
    width: "100%",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "1",
  },
  modal: {
    minWidth: "384px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "2",
  },
  header: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "20px 20px 4px 0px",
    fill: "#B5B5B5",
  },
  title: {
    marginLeft: "32px",
    fontSize: "24px",
    margin: "0",
    paddingBottom: "31px",
  },
  content: {
    margin: "0 32px 32px",
  },
  crosse: {
    display: "flex",
    justifyContent: "flex-end",
    cursor: "pointer",
    marginRight: "4px",
    width: "26px",
    height: "26px",
  },
};

export const useModalStyles = createUseStyles(modalStyles);
