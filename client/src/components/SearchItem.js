import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getItems} from '../actions/itemActions';
import ProductCard from './ProductCard';

const SearchItem = () => {

  const dispatch = useDispatch();
  const items = useSelector(state => state.itemReducer.items);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchItems = async() => {
    await dispatch(getItems);
  }

  useEffect(() => {
    fetchItems();
  }, []);

  let filteredItems = items.filter(item => item.name.toLowerCase().match(searchTerm.toLowerCase()));

  return (
    <div className="search-item">
      <div className="search-input">
        <h1>Search for an item name</h1>
        <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder='Search...'/>
      </div>
      <div className="card-grid">
        {filteredItems.map(item => {
          return (
            <ProductCard item={item} key={item._id}/>
          )
        })}
      </div>
    </div>
  )
}

export default SearchItem