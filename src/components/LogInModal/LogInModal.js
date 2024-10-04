import React, { forwardRef, useId } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './LogInModal.css';

//components
import { Button } from '../Button';
import { Modal } from '../Modal';

//store
import { setStatus } from '../../store/slices/auth.slice';

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");

    if (email && password) {      
      dispatch(setStatus(AUTH_STATUSES.loggedIn));
      navigate(PATH.home);
      ref.current.close();
    }
  };

  return (
    <Modal ref={ref} title={signUp ? "Sign up" : "Log in"}>
      {signUp ?
        (<form className="log-in" onSubmit={handleSubmit}>
   
        <label className="log-in__label" htmlFor={username}>Username</label>
        <input className="log-in__text-field"  id={username}  name="text" type="text" placeholder="username" />

        <label className="log-in__label" htmlFor={birthdate}>Your birthdate</label>
        <input className="log-in__text-field"  id={birthdate} name="date" type="date" placeholder="birthdate" />

        <label className="log-in__label" htmlFor={emailId}>Email</label>
        <input className="log-in__text-field" id={emailId} name="email" type="email" placeholder="Email" />

        <label className="log-in__label" htmlFor={passwordId}>Password</label>
        <input className="log-in__text-field" id={passwordId} name="password" type="password" placeholder="Password" />
        <Button  type="submit" className="log-in__button" color="primaryAccent">Log In</Button>
      </form>) : (
        <form className="log-in" onSubmit={handleSubmit}>
        <label className="log-in__label" htmlFor={emailId}>Email</label>
        <input className="log-in__text-field" id={emailId} name="email" type="email" placeholder="Email" />
        <label className="log-in__label" htmlFor={passwordId}>Password</label>
        <input className="log-in__text-field" id={passwordId} name="password" type="password"placeholder="Password" />
        {<Button type="submit" className="log-in__button" color="primaryAccent"> Log In</Button>}
      </form>
)}
    </Modal>
  );
});
