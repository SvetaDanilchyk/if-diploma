import React, { forwardRef, useEffect, useId, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//styles
import './LogInModal.css';
//components
import { Button } from '../Button';
import { Modal } from '../Modal';
import { ProfileForm } from '../ProfileForm/ProfileForm';
//store
import { loginUser, registerUser, resetError } from '../../store/slices/registration.slice';
import { setLoggingIn, setStatus } from '../../store/slices/auth.slice';
import { setUser } from '../../store/slices/user.slice';
//constans
import { AUTH_STATUSES } from '../../constans/authStatuses';
import { PATH } from '../../constans/paths';

export const LogInModal = forwardRef(({ signUp }, ref) => {
  const emailId = useId();
  const passwordId = useId();
  const birthdate = useId();
  const username = useId();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(signUp); 
  const { user, error } = useSelector((state) => state.registration);
  const status = useSelector((state) => state.auth.status); 
  const isLoggingIn = useSelector((state) => state.auth.isLoggingIn); 

  useEffect(() => {
    dispatch(resetError());  
  }, [dispatch]);

  useEffect(() => {
    setIsSignUp(signUp);
  }, [signUp]);
  
  useEffect(() => {
    if (user && user.id && status === AUTH_STATUSES.loggedOut && isLoggingIn && !error) {
      dispatch(setStatus(AUTH_STATUSES.loggedIn));
      dispatch(setLoggingIn(false)); 
      localStorage.setItem('currentUserId', user.id);
      navigate(PATH.home);
      ref.current.close();
    }
  }, [user, status, isLoggingIn, error, dispatch, navigate, ref]);


  const handleSubmit = (event) => {
    event.preventDefault();  
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");
  
    if (!email || !password) {
      alert("Both email and password are required for log in.");
      dispatch(resetError());
      return;
    }
  
    if (isSignUp) {
      const username = formData.get("username");
      const birthdate = formData.get("birthdate");
  
      if (email && password && username && birthdate) {
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
      } else {
        alert("Please fill in all fields for sign up.");
      }
    } else {
      const savedUsers = JSON.parse(localStorage.getItem('allUsers')) || [];
      const existingUser = savedUsers.find(user => user.email === email);
  
        dispatch(resetError()); 
        dispatch(loginUser({ email, password} ));
        dispatch(setUser(existingUser)); 
        dispatch(setLoggingIn(true));
    }
  };

  return (
    <Modal ref={ref} title={isSignUp ? "Sign up" : "Log in"}>
      {isSignUp ? (
        <ProfileForm  
          handleSubmit={handleSubmit}
          username={username}
          birthdate={birthdate}
          emailId={emailId}
          passwordId={passwordId}
          nameBtn="Sign Up"
        />
      ) : (
        <form className="log-in" onSubmit={handleSubmit}>
          <label className="log-in__label" htmlFor={emailId}>Email</label>
          <input className="log-in__text-field" id={emailId} name="email" type="email" placeholder="Email" required />
          <label className="log-in__label" htmlFor={passwordId}>Password</label>
          <input className="log-in__text-field" id={passwordId} name="password" type="password" placeholder="Password" required />
          <Button type="submit" className="log-in__button" color="primaryAccent">
            Log In
          </Button>
        </form>
      )}
      {error && <p className="error-message">{error}</p>}
    </Modal>
  );
});

