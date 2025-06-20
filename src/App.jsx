import { useState, useEffect } from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './Pages/Home';
import Products from './Pages/Products';
import ShoppingCart from './Pages/ShoppingCart';


function App() {
  const [cart, setCart] = useState([])
  const [subtotal, setSubtotal] = useState(0)

  const onAddToCart = (product) => {
    setCart(prev => {
      const alreadyInCart = prev.some(item => item.id === product.id);
      if(alreadyInCart){
        return prev;
      } else {
        return [...prev, product]
      }
    });

  }

  const removeFromCart = (idToRemove) => {
    setCart(prev => prev.filter(item => item.id !== idToRemove));
  }

  const updateItemInCart = (searchID, change) => {
    setCart(prevCart => prevCart.map(item => {
      if (item.id === searchID) {
        const newQuantity = Math.max(1, (item.quantity || 1) + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };
  useEffect(() => {
    let value = cart.reduce((total, item) => {
      const itemQuantity = item.quantity || 1;
      return total + (item.price * itemQuantity);
    }, 0);
    setSubtotal(Number(value.toFixed(2)));
  }, [cart])


  return (
    <BrowserRouter>

      <nav className='navigate'>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/products'>Products</Link>
        </div>

        <div><img className='logo-nav' src='logo.png' /></div>

        <div>
          <button className="cart-button">
            <Link to='/cart'>
              <img className='cart-icon' src={cart.length > 0 ? 'redLogo.svg' : 'cartlogo.svg'} alt="cart" />
            </Link>
          </button>
        </div>



      </nav>

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products onAddToCart={onAddToCart} />} />
          <Route path='/cart' element={<ShoppingCart
            cart={cart}
            removeFromCart={removeFromCart}
            updateItemInCart={updateItemInCart}
            subtotal={subtotal} />} />
        </Routes>
      </main>

      <footer>
        <div className='contact'></div>
        <div className='sign-up'></div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
