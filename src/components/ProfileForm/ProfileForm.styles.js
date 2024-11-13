import { createUseStyles } from 'react-jss';

const profileForm = () => ({
  settingsContainer: {
    backgroundColor: '#ffffff',
    width: '300px',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    margin: '0 auto',
  },
  settingsTitle: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  profilePicture: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
  },
  profileImg: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    marginBottom: '10px',
  },
  changePhotoBtn: {
    backgroundColor: '#c4c4c4',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '5px 10px',
    fontSize: '14px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#b3b3b3',
    },
  },
  settingsForm: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    textAlign: 'left',
    fontSize: '14px',
    marginBottom: '5px',
    color: '#333',
  },
  input: {
    padding: '8px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '14px',
  },
  saveBtn: {
    backgroundColor: '#ff6f61',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px',
    fontSize: '16px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#ff5a4d',
    },
    statusMessage: {
      margin: "10px 0",
      color: "#28a745", 
      fontSize: "14px",
      fontWeight: "bold",
    },
  },
});

export const useStylesProfileForm = createUseStyles(profileForm);