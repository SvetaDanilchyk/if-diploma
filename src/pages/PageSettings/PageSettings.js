import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//styles
import { useStylesSettings } from './PageSettings.styles';
//components
import { ProfileForm } from "../../components/ProfileForm/ProfileForm";
//store
import { updateUserAndAllUsers } from "../../store/slices/registration.slice";

export const PageSettings = () => {
  const classes = useStylesSettings();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [statusMessage, setStatusMessage] = useState("");
  const [formResetKey, setFormResetKey] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const updatedUserData = {
      id: user.id,
      email: formData.get("email"),
      password: formData.get("password"),
      name: formData.get("username"),
      birthdate: formData.get("birthdate"),
    };
 try {
  dispatch(updateUserAndAllUsers(updatedUserData));
  setStatusMessage("User data updated successfully!");
} catch (error) {
  setStatusMessage("Failed to update user data. Please try again.");
}
  };

  return (
    <div className={classes.settingsContainer}>
      <h2 className={classes.settingsTitle}>Settings</h2>
      <div className={classes.profilePicture}>
        <img src="profile-placeholder.png" alt="Profile" className={classes.profileImg} />
        <button className={classes.changePhotoBtn}>Change photo</button>
      </div>
      {statusMessage && <p className={classes.statusMessage}>{statusMessage}</p>}
      <ProfileForm  
        key={formResetKey} 
        handleSubmit={handleSubmit}
        username={user.name}
        birthdate={user.birthdate}
        emailId={user.email}
        passwordId={user.password}
        nameBtn="Save"
      />
    </div>
  );
};

