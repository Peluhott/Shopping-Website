import { Link } from 'react-router-dom'
import React from 'react'
import './Home.css';

function Home() {
    return (
        <div className="home-content">
            <div className="mvp-content">
                <div className='mpv-image'>
                    <img src='placeholder.jpeg'/> 
                    </div>
                <div className="mvp-text">
                    <h1>Gear Up for New Adventures</h1>
                    <p>Discover bikes that blend performance, comfort, and style. Built to last. Ready to ride.</p>
                    <Link to='/products'>
                        <button>Shop Now</button>
                    </Link>
                </div>
            </div>

            <div className="video">
                <div className="video-content">Content for this section</div>
            </div>

            <div className="featured">
                <p>Featured Products</p>
                <div className="featured-products">
                    <div className="product-cards">
                        <img className='featured-pic' src="/A2.png" alt="product" />
                        <p>StrideX</p>
                    </div>

                    <div className="product-cards">
                        <img className='featured-pic'  src="/A4.png" alt="product" />
                        <p>PulseRider</p>
                    </div>

                    <div className="product-cards">
                        <img className='featured-pic' src="/A5.png" alt="product" />
                        <p>Cyclone</p>
                    </div>
                </div>
            </div>

            <div className="about">
                <img src="/placeholder.jpeg" alt="about" />
                <p>Some Bs quote about purpose</p>
            </div>

            <div className="contact"></div>

            <div className="sign-up">
                <p>Sign up to recieve blah blah blah</p>
                <form>form to sign up</form>
            </div>
        </div>
    )
}

export default Home