import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { auth } from '../firebase'
import './SigninForm.css'
import { useHistory } from 'react-router-dom';


const SigninForm = () => {
    const history = useHistory();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const registerUser = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then(authuser => {
                if (authuser) {
                    authuser.user.updateProfile({
                        displayName: username,
                    })

                }
                history.push('/')
            })
            .catch(err => console.log(err.message))
    }
    const signinUser = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(authuser => authuser && history.push('/'))
            .catch(err => console.log(err.message))
    }


    return (
        <>
            <div className="signin">
                <img className="signin__logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="logo" />

                <form className="signin__form" >
                    <div className="signin__form-title">
                        <h3>Sign-In</h3>
                        <p>E-mail ( phone for mobile accounts )</p>
                    </div>
                    <TextField
                        label="username"
                        type="username"
                        autoFocus={true}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        label="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required={true}
                    />
                    <TextField
                        label="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required={true}
                    />
                    <Button
                        variant="contained"
                        type="submit"
                        className="signin__signin-button"
                        onClick={signinUser}
                    >Sign in</Button>

                    <small>By signing in you agree to test this Amazon-clone signinpage
                    <span className="signin__form-condition">Conditions of testing app.
                    </span>trial amazon site clone</small>
                    <p className="signin__form-help"> <ArrowRightIcon />Need help ?</p>
                </form>
                <div className="signin__divider">
                    <hr className="signin__divider-line" />
                    <p>New to Amazon ?</p>
                    <hr className="signin__divider-line" />
                </div>
                <Button
                    variant="contained"
                    className="signin__register-button"
                    onClick={registerUser}
                >Register</Button>
            </div>
        </>
    )
}

export default SigninForm
