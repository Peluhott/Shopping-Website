function Home(){

    return (
        <div className="Home-content">
            
            <div className="mvp-content">
                <div className="image-container">
                    <img src="/placeholder.jpeg"/>
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
                        <img src="/placeholder.pjeg"/>
                        <p>Name of product</p>
                        
                    </div>
                    
                    <div className="product-cards">
                        <img src="/placeholder.pjeg"/>
                        <p>Name of product</p>
                    </div>
                    
                    <div className="product-cards">
                    <img src="/placeholder.pjeg"/>
                    <p>name of product</p>
                    </div>
                </div>
            </div>

            <div className="about">
                <img>Picture</img> 
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