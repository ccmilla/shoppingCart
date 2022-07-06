import React from 'react'

export default function Dessert(props) {
  const {dessert, addDessert} = props;
  return (
    <div>
        <img className="small" src={dessert.image} alt={dessert.name}></img>
        <h3>{dessert.name}</h3>
        <div>${dessert.price}</div>
        <div>
        <button onClick={()=> addDessert(dessert)}>Add to Cart</button>
        </div>
    </div>
  )
}