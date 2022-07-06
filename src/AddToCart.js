import { FaPlus } from 'react-icons/fa';
import { useRef } from 'react';

const AddToCart =({newItem, setNewItem, handleSubmit}) =>{
    const inputRef = useRef();
    return(
        <form className="addForm" onSubmit={handleSubmit}>
            <input
                autoFocus
                ref={inputRef}
                id="addItem"
                type="text"
                placeholder='AddItem'
                required
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button 
                type="submit"
                aria-label="Add Item"
                onClick={() => inputRef.current.focus()}
            >
              <FaPlus/>   
            </button>
        </form>
    )
}

export default AddToCart;