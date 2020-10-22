import axios from 'axios';

export const getItems = async(dispatch, getState) => {
  try {
    const res = await axios.get('http://localhost:5000/items', {headers: {
      'auth-token': getState().userReducer.token
    }});
    const data = await res.data;
    dispatch({
      type: 'GET_ITEMS',
      payload: data
    });
  } catch(err) {
    console.log(err);
  }
}

export const getSingleItem = id => {
  return async(dispatch, getState) => {
    try {
      const res = await axios.get(`http://localhost:5000/items/${id}`, {headers: {
        'auth-token': getState().userReducer.token
      }});
      const data = await res.data;
      dispatch({
        type: 'GET_SINGLE_ITEM',
        payload: data
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export const addItem = (newItem) => {
  return async(dispatch, getState) => {
    try {
      const res = await axios.post('http://localhost:5000/items/new-item', newItem, {headers: {
        'auth-token': getState().userReducer.token
      }});
      const data = await res.data.item;
      dispatch({
        type: 'ADD_ITEM',
        payload: data
      });
    } catch (err) {
      console.log(err);
    }
  }
}

export const deleteItem = id => {
  return async(dispatch, getState) => {
    try {
      const res = await axios.delete(`http://localhost:5000/items/delete-item/${id}`, {headers: {
        'auth-token': getState().userReducer.token
      }});
      console.log(res);
      dispatch({
        type: 'REMOVE_ITEM',
        id: id
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const updateItem = (id, updData) => {
  return async(dispatch, getState) => {
    try {
      const res = await axios.put(`http://localhost:5000/items/edit-item/${id}`, updData, {headers: {
        'auth-token': getState().userReducer.token
      }});
      const data = res.data.updItem;
      dispatch({
        type: 'UPDATE_ITEM',
        payload: data
      });
    } catch (error) {
      console.log(error);
    }
  }
}