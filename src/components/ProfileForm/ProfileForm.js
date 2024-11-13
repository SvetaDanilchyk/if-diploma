import React from 'react';
//styles
import { useStylesProfileForm } from './ProfileForm.styles';
//components
import { Button } from '../Button';

export const ProfileForm = ({handleSubmit, username, birthdate, emailId, passwordId, nameBtn}) => {    
    const classes = useStylesProfileForm();
    
    return (
    <form className={classes.settingsForm} onSubmit={handleSubmit}>
        <label className={classes.label} htmlFor={username}>Username</label>
        <input className={classes.input} id={username} name="username" type="text" placeholder="username"  />{/* defaultValue={username} */}

        <label className={classes.label} htmlFor={birthdate}>Your birthdate</label>
        <input className={classes.input} id={birthdate} name="birthdate" type="date" placeholder="birthdate" />

        <label className={classes.label} htmlFor={emailId}>Email</label>
        <input className={classes.input} id={emailId} name="email" type="email" placeholder="Email" /> {/*  defaultValue={emailId} */}

        <label className={classes.label} htmlFor={passwordId}>Password</label>
        <input className={classes.input} id={passwordId} name="password" type="password" placeholder="Password" />
        <Button type="submit" className={classes.saveBtn} color="primaryAccent">{nameBtn}</Button>
    </form>
    )
};

