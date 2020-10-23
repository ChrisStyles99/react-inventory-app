import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '../actions/itemActions';

const AddProductForm = (props) => {

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('fruits');

  const handleSubmit = async(e) => {
    e.preventDefault();
    const data = {
      name,
      description,
      quantity,
      image,
      category
    }
    await dispatch(addItem(data));
    props.history.push('/');
  };

  return (
    <div className="add-product">
      <form className="add-form" onSubmit={handleSubmit}>
        <h1>Add a product</h1>
        <div className="form-input">
          <label htmlFor="name">Name</label>
          <input required type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)}/>
        </div>
        <div className="form-input">
          <label htmlFor="description">Description</label>
          <textarea required name="description" id="description" cols="30" value={description} onChange={e => setDescription(e.target.value)}></textarea>
        </div>
        <div className="form-input">
          <label htmlFor="quantity">Quantity</label>
          <input required type="number" name="quantity" id="quantity" min="1" value={quantity} onChange={e => setQuantity(e.target.value)}/>
        </div>
        <div className="form-input">
          <label htmlFor="image">Image URL</label>
          <input required type="url" name="image" id="image" value={image} onChange={e => setImage(e.target.value)}/>
        </div>
        <div className="form-input">
          <label htmlFor="category">Category</label>
          <select name="category" id="category" value={category} onChange={e => setCategory(e.target.value)}>
            <option value="fruits">Fruits</option>
            <option value="vegetables">Vegetables</option>
          </select>
        </div>
        <div className="form-input">
          <button type="submit">Add product</button>
        </div>
      </form>
    </div>
  )
}

export default AddProductForm
