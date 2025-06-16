import { Link } from 'react-router-dom'
import React from 'react'
import './Home.css';

function Home() {
    return (
        <div className="home-content">
            <div className="mvp-content">
                <div className='mpv-image'>
                    <img className='hero-pic' src='ridingBike.webp'/> 
                    </div>
                <div className="mvp-text">
                    <h1>Gear Up for New Adventures</h1>
                    <p>Discover bikes that blend performance, comfort, and style. Built to last. Ready to ride.</p>
                    <Link to='/products'>
                        <button>Shop Now</button>
                    </Link>
                </div>
            </div>

            <div className="perks">
                <div className='perk'>
                    <img className='perk-icon' src='battery.svg'></img>
                    <p>Long-Lasting Battery</p>
                </div>

                <div className='perk'>
                    <img className='perk-icon' src='comfortable.svg'></img>
                    <p>Built For Comfort</p>
                </div>

                <div className='perk'>
                    <img className='perk-icon' src='eco.svg'></img>
                    <p>Eco-Friendly</p>
                </div>
            </div>

            <div className="featured">
                <h2>Featured Products</h2>
                <div className="featured-products">
                    <div className="product-cards">
                        <img className='featured-pic' src="/A2.png" alt="product" />
                        <h3>StrideX</h3>
                    </div>

                    <div className="product-cards">
                        <img className='featured-pic'  src="/A4.png" alt="product" />
                        <h3>PulseRider</h3>
                    </div>

                    <div className="product-cards">
                        <img className='featured-pic' src="/A5.png" alt="product" />
                        <h3>Cyclone</h3>
                    </div>
                </div>
            </div>

            <div className="about">
                
                <p>Ride as much or as little, as long or as short as you feel. But ride.</p>
            </div>
            <div className='footer'>
                <div className="contact">
                <p>Phone: (555)555-5555</p>
                <p>Location: North Carolina</p>
                <p>BikeShop@yahoo.com</p>
            </div>

            <div className="sign-up">
                <p>Sign up to recieve offers!</p>
                <form className='sign-up-form'>
                    <label for='email'>Enter Email</label>
                    <input
                    id='email'
                    type='email'
                    name='email'
                    placeholder='Enter your email'
                    required/>
                    <button onClick={(e) => {e.preventDefault();}}>Submit</button>
                </form>
            </div> 
            </div>
           
        </div>
    )
}

export default Home