import Appetizer from './Components/Appetizer';
import Meal from './Components/Meal';
import Dessert from './Components/Dessert';
import Beverage from './Components/Beverage';

export default function Content(props) {
    const {appetizers, onAdd } = props; 
    const {meals, addMeal} = props;  
    const {desserts, addDessert} = props;
    const {beverages, addBeverage} = props;
   
    return(
      <main>
        <div className="flex-container">
            <h2>Menu</h2>
            <div className="flex-child">
                <h4>Appetizers</h4>
                {appetizers.map((appetizer) => (
                    <Appetizer key={appetizer.id} appetizer={appetizer} onAdd={onAdd} ></Appetizer>
                ))}
            </div>
            <div className="flex-child">
                <h4>Main Course</h4>
                {meals.map((meal) => (
                    <Meal key={meal.id} meal={meal} addMeal={addMeal}></Meal>
                ))}
            </div>
            <div className="flex-child">
                <h4>Desserts</h4>
                {desserts.map((dessert) => (
                    <Dessert key={dessert.id} dessert={dessert} addDessert={addDessert}></Dessert>
                ))}
            </div>
            <div className="flex-child">
                <h4>Beverages</h4>
                {beverages.map((beverage) => (
                    <Beverage key={beverage.id} beverage={beverage} addBeverage={addBeverage}></Beverage>
                ))}
            </div>
        </div>
      </main>
    )
/*    const [quantity, setQuantity] = useState(0);

    function handleAdd(){
        setNewItem(addItemToCart);
        {handleSubmit}
    
    return (
            <main>
                <div class="flex-container">
                <div className="flex-child">
                    <p><b>Appetizers</b></p>
                        <p>
                        <img src="/wings.jpg" alt="wings" width="40" height="40"></img>Wings $14</p>
                        <button onClick={() => setOpenModal(true)}> Add to cart </button>
                        {openModal && 
                        <AddItem closeModal={setOpenModal}/>}
                    <p>
                     <img src="/nachos.jpg" alt="nachos" width="40" height="40"></img>
                     <p>Nachos</p>
                    </p>
                    <p>
                     <img src="/skewers.jpg" alt="skewers" width="40" height="40"></img>
                     <p>Skewers</p>
                    </p>
                </div>
                <div className="flex-child">
                    <p><b>Main</b></p>
                    <p>
                     <img src="/salad.jpg" alt="salad" width="40" height="40"></img>
                     <p>Salad</p>
                    </p>
                    <p>
                     <img src="/burgers.jpg" alt="burgers" width="40" height="40"></img>  
                     <p>Burgers</p>
                    </p>
                    <p>
                     <img src="/pizza.jpg" alt="pizza" width="40" height="40"></img> 
                     <p>Pizza</p>
                    </p>
                    <p>
                     <img src="/pasta.jpg" alt="pasta" width="40" height="40"></img>
                     <p>Pasta</p>
                    </p>
                </div>
                <div className="flex-child">
                    <p><b>Desserts</b></p>
                    <p>
                     <img src="/flan.jpg" alt="flan" width="40" height="40"></img>
                     <p>Flan</p>
                    </p>
                    <p>
                     <img src="/cake.jpg" alt="cake" width="40" height="40"></img>
                     <p>Cake</p>
                    </p>
                    <p>
                     <img src="/donuts.jpg" alt="donuts" width="40" height="40"></img>
                     <p>Donuts</p>
                    </p>
                </div>
            </div>
            <div class="flex-container">
                <div className="flex-child">
                    <p><b>Beverages</b></p>
                    <p>
                     <img src="/soda.jpg" alt="soda" width="40" height="40"></img>
                     <p>Soda</p>
                    </p>
                    <p>
                     <img src="/juice.jpg" alt="juice" width="40" height="40"></img>
                     <p>Juice</p>
                    </p>
                    <p>
                     <img src="/coffee.jpg" alt="coffee" width="40" height="40"></img>
                     <p>Coffee</p>
                    </p>
                    <p>
                     <img src="/beer.jpg" alt="beer" width="40" height="40"></img>
                     <p>Beer</p>
                    </p>
                </div>  
            </div>
        </main> 
    )
}
*/
}