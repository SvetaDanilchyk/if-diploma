import { createUseStyles } from "react-jss";

const settings = {
  settingsContainer: {
    width: "320px",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    marginBottom: "40px",
    margin: "0 auto",
  },
  settingsTitle: {
    fontSize: "24px",
    marginBottom: "40px",
  },
  profilePicture: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "26px",
  },
  profileImg: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    marginBottom: "16px",
  },
  changePhotoBtn: {
    display: "inline-block",
    backgroundColor: "#c4c4c4",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "7px 19px",
    fontSize: "14px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#b3b3b3",
    },
  },
  settingsForm: {
    display: "flex",
    flexDirection: "column",
  },
  fileInput: {
    display: "none",
  },
  label: {
    textAlign: "left",
    fontSize: "14px",
    marginBottom: "5px",
    color: "#333",
  },
  input: {
    padding: "8px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    fontSize: "14px",
  },
  settingBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto ",
    backgroundColor: "#FF5D4F",
    color: "#fff",
    width: "122px",
    height: "32px",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#fa867c",
    },
  },
};

export const useStylesSettings = createUseStyles(settings);
