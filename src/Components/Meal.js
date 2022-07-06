import React from 'react'
//import AddItem from './Components/AddItem';
//import { useState } from 'react';

export default function Meals(props) {
  const {meal, addMeal} = props;
  return (
    <div>
        <img className="small" src={meal.image} alt={meal.name}></img>
        <h3>{meal.name}</h3>
        <div>${meal.price}</div>
        <div>
        <button onClick={()=> addMeal(meal)}>Add to Cart</button>
        </div>
    </div>
  )
}