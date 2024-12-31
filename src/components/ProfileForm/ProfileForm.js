import React, { useState } from "react";
import classNames from "classnames";
//styles
import { useStylesProfileForm } from "./ProfileForm.styles";
import { Button } from "../Button";

export const ProfileForm = ({ handleSubmit, formType, styleBtn, nameBtn }) => {
  const classes = useStylesProfileForm();
  const [errors, setErrors] = useState({});
  const [formValues, setFormValues] = useState({
    username: "",
    birthdate: "",
    email: "",
    password: "",
  });

  const validateField = (name, value) => {
    const newErrors = { ...errors };

    switch (name) {
      case "username":
        if (
          formType === "Sign Up" &&
          (!value || value.length < 2 || value.length > 15)
        ) {
          newErrors.username = "Must be at least 2 characters.";
        } else {
          delete newErrors.username;
        }
        break;
      case "birthdate":
        if (formType === "Sign Up") {
          const minDate = new Date("1924-01-01");
          const maxDate = new Date();
          const birthdateDate = new Date(value);
          if (!value || birthdateDate < minDate || birthdateDate > maxDate) {
            newErrors.birthdate = "Birthdate must be between 1924 and today.";
          } else {
            delete newErrors.birthdate;
          }
        }
        break;
      case "email":
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value || !emailPattern.test(value)) {
          newErrors.email = "Invalid email format.";
        } else {
          delete newErrors.email;
        }
        break;
      case "password":
        if (!value || value.length < 8 || value.length > 16) {
          newErrors.password = "Password must be between 8 and 16 characters.";
        } else {
          delete newErrors.password;
        }
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    validateField(name, value);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const isFormValid =
    formType === "Sign Up"
      ? formValues.username &&
        formValues.birthdate &&
        formValues.email &&
        formValues.password &&
        Object.keys(errors).length === 0
      : formValues.email &&
        formValues.password &&
        Object.keys(errors).length === 0;

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit(formValues);
    setFormValues({
      username: "",
      birthdate: "",
      email: "",
      password: "",
    });
    setErrors({});
  };

  return (
    <form className={classes.settingsForm} onSubmit={handleFormSubmit}>
      {formType === "Sign Up" && (
        <>
          <label className={classes.label} htmlFor="username">
            Username
          </label>
          <input
            className={classes.input}
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            value={formValues.username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.username && (
            <div className={classes.error}>{errors.username}</div>
          )}

          <label className={classes.label} htmlFor="birthdate">
            Your Birthdate
          </label>
          <input
            className={classes.input}
            id="birthdate"
            name="birthdate"
            type="date"
            placeholder="Birthdate"
            value={formValues.birthdate}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.birthdate && (
            <div className={classes.error}>{errors.birthdate}</div>
          )}
        </>
      )}

      <label className={classes.label} htmlFor="email">
        Email
      </label>
      <input
        className={classes.input}
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        value={formValues.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.email && <div className={classes.error}>{errors.email}</div>}

      <label className={classes.label} htmlFor="password">
        Password
      </label>
      <input
        className={classNames(classes.input, classes.formGroup)}
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        value={formValues.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.password && (
        <div className={classes.error}>{errors.password}</div>
      )}

      <Button name={nameBtn} disabled={!isFormValid} />
    </form>
  );
};
