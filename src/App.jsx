import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import Cart from 'Cart'

function App() {
  const [cart, setCart] = useState([])

  return (
    <>
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
    </>
  );
}

export default App
