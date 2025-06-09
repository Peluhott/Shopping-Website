import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <nav className='navigate'>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/Products'>Products</Link>
        </div>

        <div>logo goes here</div>

        <button className='Checkout'>
          <Link to='/ShoppingCart'>Logo to Cart</Link>
        </button>

     </nav>
    </>
  );
}

export default App
