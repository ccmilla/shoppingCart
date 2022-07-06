import React from 'react'

export default function Beverage(props) {
  const {beverage, addBeverage} = props;
  return (
    <div>
        <img className="small" src={beverage.image} alt={beverage.name}></img>
        <h3>{beverage.name}</h3>
        <div>${beverage.price}</div>
        <div>
        <button onClick={()=> addBeverage(beverage)}>Add to Cart</button>
        </div>
    </div>
  )
}