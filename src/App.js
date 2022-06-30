import './App.css';
import Header from './Header';
import Content from './Content';
import Cart from './Cart';
import { useState, useEffect} from 'react';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('myCart')) || []);
  const [newItem, setNewItem] = useState('')

  useEffect(() => {
    localStorage.setItem('myCart', JSON.stringify(items));
  }, [items])

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(newItem);
    setNewItem('');
  }

  return (
    <div className="App">
      <Header title="JoJo's Diner"/>
      <Content 
         setNewItem={setNewItem}
         handleSubmit={handleSubmit}
      />
      <Cart 
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        />
    </div>
  );
}

export default App;
