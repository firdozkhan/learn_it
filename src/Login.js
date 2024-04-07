import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { auth, provider } from './firebase'

const Login = () => {
    const signIn = () => {
        // clever google login shizz...

        auth.signInWithPopup(provider).catch((err) => alert(err.message))
    }
    return (
        <div className='login' >
            <div className="login__logo">
                <img src="https://www.shutterstock.com/image-photo/learn-learning-education-knowledge-wisdom-260nw-372270265.jpg" alt="logo" />
            </div>

            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
