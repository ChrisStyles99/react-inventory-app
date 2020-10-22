const initialState = {
  token: localStorage.getItem('token') || null,
  isLoggedIn: false
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'LOGIN':
      return {
        ...state,
        token: action.payload
      }
    case 'LOGOUT':
      return {
        ...state,
        token: action.payload
      }
    default:
      return state
  }
}

export default userReducer;