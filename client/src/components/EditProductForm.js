import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleItem, updateItem } from '../actions/itemActions';

const EditProductForm = (props) => {

  const dispatch = useDispatch();
  const singleItem = useSelector(state => state.singleItem);

  const fetchData = () => {
    dispatch(getSingleItem(props.match.params.id));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const [name, setName] = useState(singleItem.name);
  const [description, setDescription] = useState(singleItem.description)
  const [quantity, setQuantity] = useState(singleItem.quantity);
  const [image, setImage] = useState(singleItem.image);
  const [category, setCategory] = useState(singleItem.category);

  const handleUpdate = e => {
    e.preventDefault();
    const data = {
      name, description, quantity, image, category
    }
    dispatch(updateItem(props.match.params.id, data));
    props.history.push('/');
  };

  return (
    <div className="edit-product">
      <form className="edit-form" onSubmit={handleUpdate}>
        <h1>Edit product</h1>
        <div className="form-input">
          <label htmlFor="name">Name</label>
          <input value={name} onChange={e => setName(e.target.value)} required type="text" id="name" name="name"/>
        </div>
        <div className="form-input">
          <label htmlFor="description">Description</label>
          <textarea value={description} onChange={e => setDescription(e.target.value)} required name="description" id="description" cols="30"></textarea>
        </div>
        <div className="form-input">
          <label htmlFor="quantity">Quantity</label>
          <input value={quantity} onChange={e => setQuantity(e.target.value)} required type="number" name="quantity" id="quantity" min="1"/>
        </div>
        <div className="form-input">
          <label htmlFor="image">Image URL</label>
          <input value={image} onChange={e => setImage(e.target.value)} required type="url" name="image" id="image"/>
        </div>
        <div className="form-input">
          <label htmlFor="category">Category</label>
          <select value={category} onChange={e => setCategory(e.target.value)} name="category" id="category">
            <option value="fruits">Fruits</option>
            <option value="vegetables">Vegetables</option>
          </select>
        </div>
        <div className="form-input">
          <button type="submit">Edit product</button>
        </div>
      </form>
    </div>
  )
}

export default EditProductForm
