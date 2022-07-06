import React from 'react';
import { useState} from 'react';
import './AddItem.css';

function AddItem({ closeModal }) {    
    let [count, setCount] = useState(0);
    /*const [newItemInCart, addToCart] = useState('');*/

    function incrementCount(){
        if(count < 10){
            count = count + 1;
            setCount(count);
        }
        else
            alert('Please place another order for quantities more than 10')
    }
    function decrementCount(){
        if(count > 0){
            count = count - 1;
            setCount(count);
        }
        else
          alert('The item will not be added to your cart')
    }/*
    function addToCart(){
        count={quantity};
        setQuantity(count);
        newItemInCart = fromMenu;

        
    }*/
  return (
    <div id="addPopUp" className="addModalPopUp">
        <div className="addModalContainer">
            <div className='headerCloseBtn'>
                <button onClick={() => closeModal(false)}> X </button>
            </div>
            <div className="header">
                <h1>Add Item to Cart</h1>
            </div>
            <div className="body">
                <p>How many would you like?</p>
                <button onClick={incrementCount}>+</button>
                <div>{count}</div>
                <button onClick={decrementCount}>-</button>
            </div>
            <div className="footer">
                <button > Add Item </button>
                <button onClick={() => closeModal(false)} id="cancelBtn"> Cancel </button>
            </div>
        </div>
    </div> 
  )
}

export default AddItem