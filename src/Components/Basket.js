import React from 'react';

export default function Basket(props) {
  const {cartItems, onAdd, onRemove} = props;
  const itemsPrice = cartItems.reduce((a,c) => a+ c.price * c.qty, 0);
  const tax = itemsPrice * 0.08;
  let tip = 0;
  const total = itemsPrice + tax + tip;
  return (
     <aside className='block col-1'>
        <h2>Cart Items</h2>
        <div>{cartItems.length === 0 && <div>Cart is Empty</div>}</div>
        {cartItems.map((item) =>(
                <div key={item.id} className="row">
                    <div className="col-2">{item.name}</div>
                    <div className="col-2">
                        <button onClick={()=>onAdd(item)} className="add">+</button>
                        <button onClick={()=>onRemove(item)} className="remove">-</button>
                    </div>
                <div className="col-2 text-right">
                    {item.qty} X ${item.price.toFixed(2)}
                </div>
            </div>
        ))}
        {cartItems.length !== 0 && (
            <>
            <hr></hr>
            <div className="row">
                <div className='"col-2'>Item Price</div>
                <div className='"col-1 text-right'>${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
                <div className='"col-2'>Tax</div>
                <div className='"col-1 text-right'>${tax.toFixed(2)}</div>
            </div>
            <div className="row">
                <div className='"col-2'>Tip</div>
                <div className='"col-1 text-right'>${tip.toFixed(2)}</div>
            </div>
            <div className="row">
                <div className='"col-2'><b>Total</b></div>
                <div className='"col-1 text-right'>${total.toFixed(2)}</div>
            </div>
            <hr/>
            <div className ="row">
                <button onClick={() => alert('Implement Checkout')}>
                    Checkout
                </button>
            </div>
            </>
        )}
     </aside>
  );
}
