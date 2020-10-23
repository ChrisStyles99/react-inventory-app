const initialState = {
  token: localStorage.getItem('token') || null,
  isLoggedIn: false,
  userError: null
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'USER_ERROR':
      return {
        ...state,
        userError: action.payload
      }
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