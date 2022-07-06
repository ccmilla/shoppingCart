import React from 'react';

function Basket(props) {
  const {itemsInCart, onAdd, onRemove} = props;
  return (
     <div className='item'>
        <h2>Cart Items</h2>
        <div>{itemsInCart.length === 0 && <div>Cart is Empty</div>}</div>
        {itemsInCart.map((item) =>{
            <div key={item.id} className="row">
                <div className="col-2">{item.name}</div>
                <div className="col-2">
                    <button onClick={()=>onAdd(item)} >+</button>
                    <button onClick={()=>onRemove(item)} >-</button>
                </div>
                <div className="col-2">
                    {item.qty} X ${item.price.toFixed(2)}
                </div>
            </div>
        })}
     </div>
  )
}

export default Basket