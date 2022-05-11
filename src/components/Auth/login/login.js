import React, { useState } from "react"
import axios from "axios"
import './login.css'
import { Link } from "react-router-dom"

const Login = (props, { setLoginUser }) => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:9002/login", user)
            .then(res => {
                alert(res.data.message)
                setLoginUser(res.data.user)

            })
    }

    return (
        <div className="login mt-md-4">
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}><Link to='/master'><button className="login-btn-style">Login</button></Link></div>
            <div>or</div>
            <div className="button"><button onClick={props.updateValue} className="login-btn-style">Register</button></div>
        </div>
    )
}

export default Login