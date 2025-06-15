import React from 'react'
import Cart from '../Components/Cart'

function ShoppingCart({ cart, removeFromCart, subtotal, updateItemInCart }) {
    return (
        <>
            <p>Shopping Cart</p>
            <Cart
                cart={cart}
                removeFromCart={removeFromCart}
                subtotal={subtotal}
                updateItemInCart={updateItemInCart}
            />
        </>
    )
}

export default ShoppingCart