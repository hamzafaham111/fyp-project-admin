import React, { useState } from 'react'
import Login from './login/login'
import Register from './register/register'

const Auth = () => {
    const [value, setValue] = useState(true)
    const changeValue = () => {
        value ? setValue(false) : setValue(true)
    }
    return (
        <div style={{ position: "relative", top: 30 }}>
            {value ? <Login updateValue={changeValue} /> : <Register updateValue={changeValue} />}
        </div>
    )
}

export default Auth