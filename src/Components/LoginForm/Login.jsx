import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className='f-container'>
        <form action="">
        <h1>Login</h1>
            <div className="form">
                <div className="form-data">
                    <div className="user">
                        <label htmlFor="username">Username</label>
                        <input type="text" />
                    </div>
                    <div className="pass">
                        <label htmlFor="password">Password</label>
                        <input type="password" />
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Login