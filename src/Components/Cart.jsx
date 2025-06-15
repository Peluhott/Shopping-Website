import './Cart.css';
import CartItem from './CartItem'

function Cart({ cart, subtotal, removeFromCart, updateItemInCart }) {



    return (
        <div className='cart'>
            <div className='cart-header'>
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
                            updateItemInCart={updateItemInCart}
                        />
                    ))}
                    <p>Subtotal is ${subtotal.toFixed(2)}</p>
                </>
            )
            }

        </div>
    );
}

export default Cart;