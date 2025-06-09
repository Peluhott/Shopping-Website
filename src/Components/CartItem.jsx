import React, { useState} from 'react'


function CartItem({product, onRemoveFromCart}){
    

const [quantity, setQuantity] = useState(1)
const [total, setTotal] = useState({product.price})

const Decrement = () => {
    if(quantity > 1 ){
      setQuantity(q => q - 1)
     
    }
    
}

const Increment = () => {
    setQuantity(q => q + 1)
    
}

useEffect(() => {
    setTotal((quantity * product.price).toFixed(2))

}, [quantity, product.price]);



    return (
        <div> 
            <img className="icon"></img>
            <p className="item-name"></p>
            <p className="item-price"></p>
            <button onClick={Decrement}>-</button>
            <p className="item-quantity">{quantity}</p>
            <button onClick={Increment}>+</button>
            <p className="item-total">{total}</p>
            <button onClick={onRemoveFromCart(product.id)}>Remove</button>

        </div>
    )
}