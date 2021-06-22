import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'

export const AuthPage = () => {
    
    const auth = useContext(AuthContext);
    const {loading, error, request} = useHttp()
    
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const signupHandler = async () => {
        try {
            const data = await request('/api/auth/signup', 'POST', {...form})
            //auth.login(data.token, data.userId);
        } catch (e) {
            console.log(e);

        }
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
            <h1>URL shortener</h1>
            <div>
                <div>
                    <input
                        id="email"
                        placeholder="Enter email address"
                        type="text"
                        name="email"
                        onChange={changeHandler}
                    />
                    <label htmlFor="email">Email</label>
                </div>
                <div>
                    <input
                        id="password"
                        placeholder="Enter password"
                        type="password"
                        name="password"
                        onChange={changeHandler}
                    />
                    <label htmlFor="password">Password</label>
                </div>
            </div>
            <div>
                <button onClick={loginHandler} disabled={loading}>Log In</button>
                <button onClick={signupHandler} disabled={loading}>Sign Up</button>
            </div>
        </div>
    )
}