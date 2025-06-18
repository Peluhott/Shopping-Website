



function Item({ product, onAddToCart }) {

    const handleClick = () => {
        onAddToCart(product)
    }

    return (
        <div className="item">
            <img className="item-image" src={product.image} />
            
            <p className="item-name">{product.name}</p>
            <p className="item-price">{product.price}</p>
            <button onClick={handleClick}>ADD TO CART</button>
        </div>
    );
}

export default Item;