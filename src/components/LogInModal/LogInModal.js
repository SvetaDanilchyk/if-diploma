import React, { forwardRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
//styles
import { useLoginModalStyles } from "./LogInModal.styles";
//components
import { Modal } from "../Modal";
import { ProfileForm } from "../ProfileForm/ProfileForm";
//store
import {
  loginUser,
  registerUser,
  resetError,
} from "../../store/slices/registration.slice";
import { setLoggingIn, setStatus } from "../../store/slices/auth.slice";
import { setUser } from "../../store/slices/user.slice";
//constants
import { AUTH_STATUSES } from "../../constans/authStatuses";
import { PATH } from "../../constans/paths";

export const LogInModal = forwardRef(({ signUp }, ref) => {
  const classes = useLoginModalStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(signUp);
  const { user, error } = useSelector((state) => state.registration);
  const status = useSelector((state) => state.auth.status);
  const isLoggingIn = useSelector((state) => state.auth.isLoggingIn);

  useEffect(() => {
    dispatch(resetError());
  }, [dispatch]);

  // Update the state depending on the `signUp` prop
  useEffect(() => {
    setIsSignUp(signUp);
  }, [signUp]);

  // Check the user's status
  useEffect(() => {
    if (
      user &&
      user.id &&
      status === AUTH_STATUSES.loggedOut &&
      isLoggingIn &&
      !error
    ) {
      dispatch(setStatus(AUTH_STATUSES.loggedIn));
      dispatch(setLoggingIn(false));
      localStorage.setItem("currentUserId", user.id);
      navigate(PATH.home);
      ref.current.close();
    }
  }, [user, status, isLoggingIn, error, dispatch, navigate, ref]);

  const handleSubmit = (formData) => {
    const { username, birthdate, email, password } = formData;

    if (isSignUp) {
      // Register a new user
      if (username && birthdate && email && password) {
        const newUser = {
          id: Date.now(),
          email,
          name: username,
          password,
          birthdate,
        };
        dispatch(registerUser(newUser));
        dispatch(setUser(newUser));
        setIsSignUp(false);
      }
    } else {
      // Existing user login
      const savedUsers = JSON.parse(localStorage.getItem("allUsers")) || [];
      const existingUser = savedUsers.find((user) => user.email === email);

      dispatch(resetError());
      dispatch(loginUser({ email, password }));
      dispatch(setUser(existingUser));
      dispatch(setLoggingIn(true));
    }
  };

  return (
    <Modal
      ref={ref}
      title={isSignUp ? "Welcome to Fox Library" : "Log In to Fox Library"}
    >
      <ProfileForm
        handleSubmit={handleSubmit}
        formType={isSignUp ? "Sign Up" : "Log In"}
        nameBtn={isSignUp ? "Save" : "Log In"}
      />
      {error && <p className={classes.errorMessage}>{error}</p>}
    </Modal>
  );
});
