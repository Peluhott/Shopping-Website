import React, {useState, useEffect} from 'react'

function Cart(){

    const [cart, setCart] = useState([])
    const [subtotal, setSubtotal] = useState(0)
     
    const addToCart = (product) => {
        setCart(prev => [...prev, product]);
        
    } 

    const removeFromCart = (idToRemove) => {
        setCart( prev => prev.filter(item => item.id !== idToRemove));
    }

    useEffect(() => {
        let value = cart.reduce((total, item) => total + item.price, 0)
        setSubtotal(value)
    }, [cart])

    return(
        <div>
            <div>
                <p>Item</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
            </div>
            {cart.length === 0 ? (
                <p>Your Cart is Empty</p> 
            ) : (
            <>
                {cart.map(product => (
                <CartItem
                key={product.id}
                product={product}
                onRemoveFromCart={removeFromCart}
                />
            ))}
            <p>Subtotal is {subtotal}</p>
             </>
            )
            }
        
        </div>
    );
}

export default Cart;