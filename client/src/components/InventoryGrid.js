import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../actions/itemActions';
import ProductCard from './ProductCard';

const InventoryGrid = () => {

  const dispatch = useDispatch();
  const items = useSelector(state => state.itemReducer.items);

  const fetchItems = () => {
    dispatch(getItems);
  }

  useEffect(() => {
    fetchItems();
    console.log(items);
  }, []);

  if(items === null) {
    console.log('Null');
  }

  if(!items) return <div className="inventory">Loading...</div>

  return (
    <div className="inventory">
      <h1>Inventory</h1>
      {items.length === 0 ? (
        <p>We're sorry, no products to show :(</p>
      ) : ''}
      <div className="card-grid">
        {items.map(item => {
          return (
            <ProductCard item={item} key={item._id} />
          )
        })}
    </div>
    </div>
  )
}

export default InventoryGrid
