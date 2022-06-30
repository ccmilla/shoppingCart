import ItemList from './ItemList';

const Cart = ({ items, handleCheck, handleDelete }) => {
    return (
        <main>
            <h2>Your Cart</h2>
            {items.length ? (
                <ItemList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ) : (
                <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
            )}
        </main>
    )
}

export default Cart