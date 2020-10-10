import React from 'react'

const LoginForm = () => {
  return (
    <div className="login-div">
      <form className="login-form">
        <h1>Login</h1>
        <div className="form-input">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email"/>
        </div>
        <div className="form-input">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password"/>
        </div>
        <div className="form-input">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
