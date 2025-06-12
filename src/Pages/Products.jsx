import React from 'react'
import productsData from './data/products.json'
import Item from 'Item.jsx'

function Products(){
    return (
        <>
        <div className='banner'>
            banner content will go here
        </div>

        <div className='product-container'>
            {productsData.inventory.map((individualItem) => (<Item key={individualItem.id} product={individualItem}/>))}

        </div>
        
        </>
        
    );
}