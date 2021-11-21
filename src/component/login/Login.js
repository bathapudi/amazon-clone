import React, { useState, useHistory } from 'react'
import styles from './Login.module.css'

import { Link, useNavigate } from 'react-router-dom';
import { useStateValue } from '../../context/ShoppingCart';
import { db, auth } from '../../common/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function Login() {

    const [{ user }, dispacth] = useStateValue();

    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState(user.password);
    const navigate = useNavigate();
    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                var authUser = userCredential.user;
                if (authUser) {

                    navigate('/');

                }


            }).catch(err => {
                console.log(err)
            })


    }

    const register = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                var authUser = userCredential.user;
                if (authUser) {

                    navigate('/');

                }


            }).catch(err => {
                console.log(err)
            })

    }
    return (
        <div className={styles.login}>
            <Link to='/'>
                <img
                    className={styles.login__logo}
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                />
            </Link>
            <div className={styles.login__container}>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>


                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className={styles.login__registerButton}>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
