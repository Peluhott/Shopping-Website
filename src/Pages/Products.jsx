import React from 'react'
import Item from '../Components/Item'
import productsData from '../Data/products.json'

function Products() {
    return (
        <>
            <div className='banner'>
                banner content will go here
            </div>

            <div className='product-container'>
                {productsData.inventory.map((individualItem) => (
                    <Item key={individualItem.id} product={individualItem} />
                ))}
            </div>
        </>
    );
}

export default Products