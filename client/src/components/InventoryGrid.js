import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../actions/itemActions';
import ProductCard from './ProductCard';

const InventoryGrid = () => {

  const dispatch = useDispatch();
  const items = useSelector(state => state.itemReducer.items);
  const [category, setCategory] = useState('');

  const fetchItems = async() => {
    await dispatch(getItems);
  }

  useEffect(() => {
    fetchItems();
  }, []);

  let filteredItems = items.filter(item => item.category.match(category));

  if(items === null || items === undefined) return <div className="items-error">You don't have permission to be here, login</div>

  return (
    <div className="inventory">
      <div className="category-div">
        <h1>Inventory</h1>
        <select name="category" id="category" value={category} onChange={e => setCategory(e.target.value)}>
          <option value="">Select category</option>
          <option value="fruits">Fruits</option>
          <option value="vegetables">Vegetables</option>
        </select>
      </div>
      {filteredItems.length === 0 ? (
        <p>We're sorry, no products to show :(</p>
      ) : ''}
      <div className="card-grid">
        {filteredItems.map(item => {
          return (
            <ProductCard item={item} key={item._id} />
          )
        })}
    </div>
    </div>
  )
}

export default InventoryGrid
