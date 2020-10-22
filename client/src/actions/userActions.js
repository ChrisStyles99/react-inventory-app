import axios from "axios";

export const login = user => {
  return async(dispatch) => {
    const res = await axios.post('http://localhost:5000/users/login', user);

    localStorage.setItem('token', res.data.token);

    dispatch({
      type: 'LOGIN',
      payload: res.data.token
    });
  }
}

export const logout = async(dispatch) => {
  localStorage.removeItem('token');
  dispatch({
    type: 'LOGOUT',
    payload: null
  });
}