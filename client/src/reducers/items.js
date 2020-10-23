const initialState = {
  items: [],
  singleItem: ''
}

const itemReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_ITEMS':
      return {
        ...state,
        items: action.payload
      }
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload]
      }
    case 'REMOVE_ITEM': 
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.id)
      }
    case 'UPDATE_ITEM':
      return {
        ...state
      }
    case 'GET_SINGLE_ITEM':
      return {
        ...state,
        singleItem: action.payload
      }
    case 'REMOVE_SINGLE_ITEM':
      return {
        ...state,
        singleItem: ''
      }
    default:
      return state
  }
}

export default itemReducer;