import React, { useEffect } from 'react'
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem, getSingleItem } from '../actions/itemActions';

const Product = (props) => {

  const dispatch = useDispatch();
  const singleItem = useSelector(state => state.itemReducer.singleItem);

  const fetchItem = async() => {
    await dispatch(getSingleItem(props.match.params.id));
  };

  const handleDelete = async(id) => {
    await dispatch(deleteItem(id));
    props.history.push('/');
  };

  useEffect(() => {
    fetchItem();
  }, []);

  if(singleItem === 'null') return <div className="items-error">You don't have permission to be here, login</div>

  return (
    <div className="product">
      <div className="product-title">
        <h1>{singleItem.name}</h1>
      </div>
      <div className="product-image">
        <img src={singleItem.image} alt=""/>
      </div>
      <div className="product-description">
        <p>{singleItem.description}</p>
        <p>Quantity: {singleItem.quantity}</p>
        <p>Category: {singleItem.category}</p>
      </div>
      <div className="buttons">
        <Link to={`/product/edit/${singleItem._id}`} className="btns edit-btn">Edit product</Link>
        <button onClick={() => handleDelete(singleItem._id)} className="btns delete-btn">Delete product</button>
      </div>
    </div>
  )
}

export default Product
