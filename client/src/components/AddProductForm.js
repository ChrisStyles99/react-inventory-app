import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../actions/itemActions';
import ProductCard from './ProductCard';

const AddProductForm = (props) => {
  const dispatch = useDispatch();
  const [item, setItem] = useState({
    name: '',
    description: '',
    quantity: '',
    image: '',
    category: ''
  });

  const handleChange = (e) => {
    setItem({...item, [e.target.id]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(addItem(item));
    props.history.push('/');
  };

  return (
    <div className="add-product-view">
      <div className="add-product">
        <form className="add-form" onSubmit={handleSubmit}>
          <h1>Add a product</h1>
          <div className="form-input">
            <label htmlFor="name">Name</label>
            <input
              required
              type="text"
              id="name"
              name="name"
              value={item.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-input">
            <label htmlFor="description">Description</label>
            <textarea
              required
              name="description"
              id="description"
              cols="30"
              value={item.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-input">
            <label htmlFor="quantity">Quantity</label>
            <input
              required
              type="number"
              name="quantity"
              id="quantity"
              min="1"
              value={item.quantity}
              onChange={handleChange}
            />
          </div>
          <div className="form-input">
            <label htmlFor="image">Image URL</label>
            <input
              required
              type="url"
              name="image"
              id="image"
              value={item.image}
              onChange={handleChange}
            />
          </div>
          <div className="form-input">
            <label htmlFor="category">Category</label>
            <select
              name="category"
              id="category"
              value={item.category}
              onChange={handleChange}
            >
              <option value="fruits">Fruits</option>
              <option value="vegetables">Vegetables</option>
            </select>
          </div>
          <div className="form-input">
            <button type="submit">Add product</button>
          </div>
        </form>
      </div>
      <div className="add-product-card">
        <ProductCard  item={item}/>
      </div>
    </div>
  );
};

export default AddProductForm;
