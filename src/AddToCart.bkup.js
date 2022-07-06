import { useState } from 'react';
const AddToCart = (newItem, {setNewItem, handleSubmit}) =>{
    let [count, setCount] = useState(0);
    function incrementCount(){
        if(count <= 10){
            count++;
            setCount(count);
        }
    }
    function decrementCount(){
        if(count > 0){
            count--;
            setCount(count);
        }
    }
    function addItem(){
        setNewItem(newItem);
    }
    return(
        <div id="addPopUp" class="addModalPopUp">
            <div class="addModal-content">
                <div class="modal-header">
                    <span class="close">x</span>
                    <h2>Adding Item to Cart</h2>
                </div>
            </div>
            <div class="addModal-body">
                <p>How many {newItem} would you like?</p>
                <div> <button onClick={{incrementCount}}>+</button> </div>
                <p>{count}</p>
                <div><button onClick={decrementCount}>-</button></div>
                <p><button onClick={addItem()}></button></p>
            </div>
            <div class="addModal-footer">
                <button type="button" onclick="addItem">Add Item</button>
            </div>
        </div>
    )
}
export default AddToCart;
