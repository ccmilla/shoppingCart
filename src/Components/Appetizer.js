import React from 'react'

export default function Appetizer(props) {
  const {appetizer, addApp} = props;
  return (
    <div>
        <img className="small" src={appetizer.image} alt={appetizer.name}></img>
        <h3>{appetizer.name}</h3>
        <div>${appetizer.price}</div>
        <div>
            <button onClick={()=> addApp(appetizer)}>Add to Cart</button>
        </div>
    </div>
  )
}
