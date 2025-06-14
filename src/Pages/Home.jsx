import { Link } from 'react-router-dom'
import React from 'react'
import './Home.css';

function Home() {
    return (
        <div className="home-content">
            <div className="mvp-content">
                <div className="image-container">
                    <img src="/placeholder.jpeg" alt="placeholder" />
                </div>
                <div className="mvp-text">
                    <h1>Some text right here talking about the value it will bring</h1>
                    <p>Short description on what it is</p>
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
                        <img src="/placeholder.jpeg" alt="product" />
                        <p>Name of product</p>
                    </div>

                    <div className="product-cards">
                        <img src="/placeholder.jpeg" alt="product" />
                        <p>Name of product</p>
                    </div>

                    <div className="product-cards">
                        <img src="/placeholder.jpeg" alt="product" />
                        <p>name of product</p>
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