import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/userActions';

const LoginForm = (props) => {

  const dispatch = useDispatch();
  const error = useSelector(state => state.userReducer.userError);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();

    if(email === '' || password === '') {
      return
    }

    const user = {
      email,
      password
    }

    await dispatch(login(user));
    if(error !== null) return 
    
    props.history.push('/');
  }

  return (
    <div className="login-div">
      <div className="error-msg">
        <h2>{error}</h2>
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="form-input">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)}/>
        </div>
        <div className="form-input">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)}/>
        </div>
        <div className="form-input">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm