import React, { useId } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

//styles
import { useLoginStyles } from "./Login.styles";

//store
import { setStatus } from "../../store/slices/auth.slice";

//constans
import { AUTH_STATUSES } from "../../constans/authStatuses";
import { PATH } from "../../constans/paths";

export const Login = () => {
  const classes = useLoginStyles();
  const emailId = useId();
  const passwordId = useId();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");

    if (email && password) {
      dispatch(setStatus(AUTH_STATUSES.loggedIn));
      navigate(PATH.index);
    }
  };

  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label className={classes.label} htmlFor={emailId}>
          Email
        </label>
        <input
          className={classes.textField}
          name="email"
          id={emailId}
          type="email"
          autoComplete="off"
          placeholder="Email"
        />
        <label className={classes.label} htmlFor={passwordId}>
          Password
        </label>
        <input
          className={classes.textField}
          name="password"
          id={passwordId}
          type="password"
          placeholder="Password"
        />
        <button className={classes.button} color="primary" type="submit">
          Log In
        </button>
      </form>
    </div>
  );
};
