import { FaPlus } from 'react-icons/fa';

const Content = ({ newItem, setNewItem, handleSubmit}) => {
    const handleClick = (item) => {
        setNewItem(item);
        item={newItem}
    }
    return (
            <main>
            <form onSubmit={handleSubmit}>
            <div class="flex-container">
                <div className="flex-child">
                    <p>Appetizers</p>
                    <p>
                     <img src="/wings.jpg" alt="wings" width="40" height="40"></img>
                     <button type="submit" onClick={handleClick('wings')}><FaPlus/> Add Wings</button>
                    </p>
                    <p>
                     <img src="/nachos.jpg" alt="nachos" width="40" height="40"></img>
                     <button type="submit" onClick={handleClick('nachos')}><FaPlus/> Add Nachos</button>
                    </p>
                    <p>
                     <img src="/skewers.jpg" alt="skewers" width="40" height="40"></img>
                     <button type="submit" onClick={handleClick('skewers')}><FaPlus/> Add Skewers</button>
                    </p>
                </div>
                <div className="flex-child">
                    <p>Main</p>
                    <p>
                     <img src="/salad.jpg" alt="salad" width="40" height="40"></img>
                     <button type="submit" onClick={handleClick('salad')}><FaPlus/> Add Salad</button>
                    </p>
                    <p>
                     <img src="/burgers.jpg" alt="burgers" width="40" height="40"></img>
                     <button type="submit" onClick={handleClick('burgers')}><FaPlus/> Add Burger</button>
                    </p>
                    <p>
                     <img src="/pizza.jpg" alt="pizza" width="40" height="40"></img>
                     <button type="submit" onClick={handleClick('pizza')}><FaPlus/> Add Pizza</button>
                    </p>
                    <p>
                     <img src="/pasta.jpg" alt="pasta" width="40" height="40"></img>
                     <button type="submit" onClick={handleClick('pasta')}><FaPlus/> Add Pasta</button>
                    </p>
                </div>
                <div className="flex-child">
                    <p>Desserts</p>
                    <p>
                     <img src="/flan.jpg" alt="flan" width="40" height="40"></img>
                     <button type="submit" onClick={handleClick('flan')}><FaPlus/> Add Flan</button>
                    </p>
                    <p>
                     <img src="/cake.jpg" alt="cake" width="40" height="40"></img>
                     <button type="submit" onClick={handleClick('cake')}><FaPlus/> Add Cake</button>
                    </p>
                    <p>
                     <img src="/donuts.jpg" alt="donuts" width="40" height="40"></img>
                     <button type="submit" onClick={handleClick('donuts')}><FaPlus/> Add Donuts</button>
                    </p>
                </div>
            </div>
            <div class="flex-container">
                <div className="flex-child">
                    <p>Beverages</p>
                    <p>
                     <img src="/soda.jpg" alt="soda" width="40" height="40"></img>
                     <button type="submit" onClick={handleClick('soda')}><FaPlus/> Add Soda</button>
                    </p>
                    <p>
                     <img src="/juice.jpg" alt="juice" width="40" height="40"></img>
                     <button type="submit" onClick={handleClick('juice')}><FaPlus/> Add Juice</button>
                    </p>
                    <p>
                     <img src="/coffee.jpg" alt="coffee" width="40" height="40"></img>
                     <button type="submit" onClick={handleClick('coffee')}><FaPlus/> Add Coffee</button>
                    </p>
                    <p>
                     <img src="/beer.jpg" alt="beer" width="40" height="40"></img>
                     <button type="submit" onClick={handleClick('beer')}><FaPlus/> Add Beer</button>
                    </p>
                </div>  
            </div>
          </form>
        </main> 
    )
}

export default Content