import React, {useState} from 'react'

function Cart(){

    const [cart, setCart] = useState([])
     
    const addToCard = (product) => {
        setCart(prev => [...prev, product]);
        
    } 

    const removeFromCart = (idToRemove) => {
        setCart( prev => prev.filter(item => item.id !== idToRemove));
    }

    return(
        <div>
            {cart.length === 0 ? (
                <p>Your Cart is Empty</p> 
            ) : (
            
                cart.map(product => (
                <CartItem
                key={product.id}
                product={product}
                onRemoveFromCart={removeFromCart}
                />
            ))
            )}
        
        </div>
    );
}

export default Cart;