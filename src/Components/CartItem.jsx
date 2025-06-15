import React, { useState, useEffect } from 'react'
import './CartItem.css';


function CartItem({ product, onRemoveFromCart, updateItemInCart }) {
    const [quantity, setQuantity] = useState(product.quantity || 1);
    const [total, setTotal] = useState(product.price * (product.quantity || 1));

    const Decrement = () => {
        if (quantity > 1) {
            setQuantity(q => q - 1);
            updateItemInCart(product.id, -1);
        }
    };

    const Increment = () => {
        setQuantity(q => q + 1);
        updateItemInCart(product.id, 1);
    };

    useEffect(() => {
        setTotal(Number((quantity * product.price).toFixed(2)));
    }, [quantity, product.price]);

    return (
        <div className='cart-row'>
            <div className="item-info">
                <img className="icon" src={product.image} alt={product.name} />
                <p className="item-name">{product.name}</p>
            </div>
            <p className="item-price">${product.price}</p>
            <div className='quantity-controls'>
                <button onClick={Decrement}>-</button>
                <p className="item-quantity">{quantity}</p>
                <button onClick={Increment}>+</button>
            </div>
            <p className="item-total">${total}</p>
            <button onClick={() => onRemoveFromCart(product.id)}>Remove</button>
        </div>
    );
}
export default CartItem;