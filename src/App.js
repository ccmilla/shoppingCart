import './App.css';
import Header from './Header';
import Content from './Content';
import data from './data';
import Cart from './Cart';
import Search from './Search';
import Basket from './Components/Basket';
import { useState, useEffect} from 'react';

function App() {
  const {appetizers} = data;
  const {meals} = data;
  const {desserts} = data;
  const {beverages} = data;
  const [itemsInCart, setCartItems] = useState([]);
  const onAdd = (appetizer) => {
    const exist = itemsInCart.find(x => x.id=== appetizer.id);
    if(exist){
      setCartItems(
        itemsInCart.map(x => 
          x.id === appetizer.id ? {...exist, qty: exist.qty + 1}: x))
    }else{
      setCartItems([...itemsInCart, {...appetizer, qty: 1}])
    }
  }
  const [search, setSearch] = useState('');
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('myCart')) || []);
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    localStorage.setItem('myCart', JSON.stringify(items));
  }, [items])

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  }
  // Allows user to click on this item to delete later.
  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
  }
  //When the user actually clicks the trash can.
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  }

  //handles both the search and adding to the cart.
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItem) return;
    addItem(newItem);
    setNewItem('');
  }

  return (
    /* Main View */
    <div className="App">
      <Header title="JoJo's Diner"/>
      <Content 
        appetizers={appetizers} 
        meals={meals} 
        desserts={desserts} 
        beverages={beverages}
        onAdd={onAdd}>
      </Content>
      <Basket itemsInCart={itemsInCart} onAdd={onAdd}></Basket>
      <Search
        search={search}
        setSearch={setSearch}
      />
    </div>
  );
}

export default App;
