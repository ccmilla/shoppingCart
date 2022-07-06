import './App.css';
import Header from './Header';
import Content from './Content';
import data from './data';
//import Cart from './Cart';
import Search from './Search';
import Basket from './Components/Basket';
import { useState, useEffect} from 'react';

function App() {
  const {appetizers} = data;
  const {meals} = data;
  const {desserts} = data;
  const {beverages} = data;
  const {products} = {...appetizers, ...meals, ...desserts, ...beverages};
  const [cartItems, setCartItems] = useState([]);
  
  /* adding items from each category because of block*/
  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if(exist){
      setCartItems(
        cartItems.map(x => 
          x.id === product.id ? {...exist, qty: exist.qty + 1}: x))
    }else{
      setCartItems([...cartItems, {...product, qty: 1}])
    }
  }
  const addMeal = (meal) => {
    const exist = cartItems.find(x => x.id === meal.id);
    if(exist){
      setCartItems(
        cartItems.map(x => 
          x.id === meal.id ? {...exist, qty: exist.qty + 1}: x))
    }else{
      setCartItems([...cartItems, {...meal, qty: 1}])
    }
  }
  const addDessert = (dessert) => {
    const exist = cartItems.find(x => x.id === dessert.id);
    if(exist){
      setCartItems(
        cartItems.map(x => 
          x.id === dessert.id ? {...exist, qty: exist.qty + 1}: x))
    }else{
      setCartItems([...cartItems, {...dessert, qty: 1}])
    }
  }
  const addBeverage = (beverage) => {
    const exist = cartItems.find(x => x.id === beverage.id);
    if(exist){
      setCartItems(
        cartItems.map(x => 
          x.id === beverage.id ? {...exist, qty: exist.qty + 1}: x))
    }else{
      setCartItems([...cartItems, {...beverage, qty: 1}])
    }
  }
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist.qty === 1){
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    }else{
      setCartItems(
        cartItems.map(x => 
          x.id === product.id ? {...exist, qty: exist.qty - 1}: x))
    }
  };
  
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
        onAdd={onAdd} 
        meals={meals} 
        addMeal={addMeal}
        desserts={desserts}
        addDessert={addDessert}
        beverages={beverages}
        addBeverage={addBeverage}>
      </Content>
      <Basket 
        cartItems={cartItems} 
        onAdd={onAdd}
        onRemove={onRemove}>
      </Basket>
      <Search
        search={search}
        setSearch={setSearch}
      />
    </div>
  );
}

export default App
