const initialState = {
  token: localStorage.getItem('token') || null,
  isLoggedIn: localStorage.getItem('token') ? true : false,
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
        token: action.payload,
        isLoggedIn: true
      }
    case 'LOGOUT':
      return {
        ...state,
        token: action.payload,
        isLoggedIn: false
      }
    default:
      return state
  }
}

export default userReducer;