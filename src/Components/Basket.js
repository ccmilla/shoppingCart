import React from 'react';
import { useState } from 'react';

export default function Basket(props) {
  const {cartItems, onAdd, onRemove} = props;
  const itemsPrice = cartItems.reduce((a,c) => a + c.price * c.qty, 0);
  const [tip, setTipAmount] = useState(0);
  const tax = itemsPrice * 0.08;
  const subTotal = itemsPrice + tax;
  const total = subTotal + tip;
  
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
                <div className='"col-2'>Subtotal</div>
                <div className='"col-1 text-right'>${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
                <div className='"col-2'>Tax</div>
                <div className='"col-1 text-right'>${tax.toFixed(2)}</div>
            </div>
            <div className="row">
                <div className='"col-2'>Tip</div>
                <button className='tipBtn' onClick={() => setTipAmount(.1*itemsPrice)}>10%</button>
                <button className='tipBtn' onClick={() => setTipAmount(.15*itemsPrice)}>15%</button>
                <button className='tipBtn' onClick={() => setTipAmount(.2*itemsPrice)}>20%</button>
                <button className='tipBtn' onClick={() => setTipAmount(0)}>Clear</button>
                <div className='"col-1 text-right'>${tip.toFixed(2)}</div>
            </div>
            <div className="row">
                <div className='"col-2'><b>Total</b></div>
                <div className='"col-1 text-right'><b>${total.toFixed(2)}</b></div>
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
