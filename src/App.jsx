import { useState } from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './Pages/Home';
import Products from './Pages/Products';
import ShoppingCart from './Pages/ShoppingCart';

function App() {
  const [cart, setCart] = useState([])

  return (
    <BrowserRouter>

      <nav className='navigate'>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/Products'>Products</Link>
        </div>

        <div>logo goes here</div>

        <button className={cart.length > 0 ? 'Checkout active' : 'Checkout'}>
          <Link to='/ShoppingCart'>Logo to Cart</Link>
        </button>

      </nav>

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Products' element={<Products />} />
          <Route path='/ShoppingCart' element={<ShoppingCart />} />
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
