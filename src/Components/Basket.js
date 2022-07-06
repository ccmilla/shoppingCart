import React from 'react';

export default function Basket(props) {
  const {cartItems, addApp, onRemove} = props;
  return (
     <aside className='block col-1'>
        <h2>Cart Items</h2>
        <div>{cartItems.length === 0 && <div>Cart is Empty</div>}</div>
        {cartItems.map((item) =>(
                <div key={item.id} className="row">
                    <div className="col-2">{item.name}</div>
                    <div className="col-2">
                        <button onClick={()=>addApp(item)} className="add">+</button>
                        <button onClick={()=>onRemove(item)} className="remove">-</button>
                    </div>
                <div className="col-2 text-right">
                    {item.qty} X ${item.price.toFixed(2)}
                </div>
            </div>
        ))}
     </aside>
  );
}