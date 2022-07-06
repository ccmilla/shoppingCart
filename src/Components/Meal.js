import React from 'react'

export default function Meals(props) {
  const {meal} = props;
  return (
    <div>
        <img className="small" src={meal.image} alt={meal.name}></img>
        <h3>{meal.name}</h3>
        <div>${meal.price}</div>
        <div>
            <button>Add to Cart</button>
        </div>
    </div>
  )
}