import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// styles
import { useStylesSettings } from "./PageSettings.styles";
// components
import { ProfileForm } from "../../components/ProfileForm/ProfileForm";
// store
import { setAllUsers } from "../../store/slices/registration.slice";
import { setUser } from "../../store/slices/user.slice";
import userIcon from "../../icons/user/user.svg";

export const PageSettings = () => {
  const classes = useStylesSettings();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.registration.user);
  const allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];
  const [statusMessage, setStatusMessage] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(user?.photo || userIcon);

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (formData) => {
    if (!user) {
      setStatusMessage("No user found.");
      return;
    }

    const updatedUserData = {
      ...user,
      email: formData.email || user.email,
      password: formData.password || user.password,
      name: formData.username || user.name,
      birthdate: formData.birthdate || user.birthdate,
      photo: profilePhoto,
    };

    try {
      const updatedUsers = allUsers.map((u) =>
        u.id === user.id ? updatedUserData : u,
      );
      localStorage.setItem("allUsers", JSON.stringify(updatedUsers));
      dispatch(setAllUsers(updatedUsers));
      dispatch(setUser(updatedUserData));
      setStatusMessage("User data updated successfully!");
    } catch (error) {
      setStatusMessage("Failed to update user data. Please try again.");
    }
  };

  return (
    <div className={classes.settingsContainer}>
      <h2 className={classes.settingsTitle}>Settings</h2>
      <div className={classes.profilePicture}>
        <img src={profilePhoto} alt="Profile" className={classes.profileImg} />
        <label htmlFor="photoUpload" className={classes.changePhotoBtn}>
          Change photo
        </label>
        <input
          id="photoUpload"
          type="file"
          accept="image/*"
          className={classes.fileInput}
          onChange={handlePhotoChange}
        />
      </div>
      {statusMessage && (
        <p className={classes.statusMessage}>{statusMessage}</p>
      )}

      <ProfileForm
        formType="Sign Up"
        nameBtn="Save"
        handleSubmit={handleSubmit}
        styleBtn={classes.settingBtn}
      />
    </div>
  );
};
