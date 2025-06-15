import React from 'react'
import Cart from '../Components/Cart'
import './ShoppingCart.css'

function ShoppingCart({ cart, removeFromCart, subtotal, updateItemInCart }) {
    return (
        <div className='shop-content'>
            
                
                
            <Cart
                cart={cart}
                removeFromCart={removeFromCart}
                subtotal={subtotal}
                updateItemInCart={updateItemInCart}
            />
        </div>
    )
}

export default ShoppingCart