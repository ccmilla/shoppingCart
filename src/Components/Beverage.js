import React from 'react'

export default function Beverage(props) {
  const {beverage} = props;
  return (
    <div>
        <img className="small" src={beverage.image} alt={beverage.name}></img>
        <h3>{beverage.name}</h3>
        <div>${beverage.price}</div>
        <div>
            <button>Add to Cart</button>
        </div>
    </div>
  )
}