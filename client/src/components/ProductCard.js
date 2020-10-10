import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({item}) => {
  return (
    <div className="card">
      <div className="card-header">
        <img src={item.image} alt=""/>
      </div>
      <div className="card-body">
        <h1>{item.name}</h1>
      </div>
      <div className="card-footer">
        <Link className="card-link" to={`/product/${item._id}`}>See product</Link>
      </div>
    </div>
  )
}

export default ProductCard
