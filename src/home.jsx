import "./home.css";
import Navbar from "./navbar.jsx";  
import "./navbar.css";

function Home() {
    return (
        <div className="home">
            <header className="header">
                <h1 className="title">
                    CAFEBEANS!!
                    <img 
                        src="https://static.vecteezy.com/system/resources/previews/010/160/674/original/coffee-icon-sign-symbol-design-free-png.png" 
                        alt="coffee"
                        className="coffee-icon"
                    />
                </h1>
            </header>

            
            <Navbar active ="home"/>

            <section className="main">
                <h1 className="welcome">Welcome to CAFEBEANS!!!</h1>

                <p className="description1">
                    At CafeBeans, we believe coffee is not just a drink, but a way to connect hearts.
                    Experience the perfect blend of tradition and innovation in every cup.
                </p>

                <p className="description">Sip. Smile. Repeat.</p>

                <section className="hero-section">
                    <div className="hero-content">
                        <h2>Fresh Coffee, Warm Atmosphere</h2>
                        <p>
                            Indulge in our carefully sourced beans, expertly roasted and brewed to perfection.
                            From classic espressos to creative specialty drinks, we have something for every coffee lover.
                        </p>

                        <div className="hero-stats">
                            <div className="stat">
                                <span className="stat-number">500+</span>
                                <span className="stat-label">Happy Customers</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">50+</span>
                                <span className="stat-label">Coffee Varieties</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">15+</span>
                                <span className="stat-label">Years Experience</span>
                            </div>
                        </div>
                    </div>

                    <div className="hero-image">
                        <img 
                            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop"
                            alt="Coffee shop interior"
                            className="hero-img"
                        />
                    </div>
                </section>

                <section className="menu-preview">
                    <h2>Our Signature Drinks</h2>

                    <div className="menu-items">
                        <div className="menu-item">
                            <img 
                                src="https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=150&h=150&fit=crop" 
                                alt="Espresso"
                                className="menu-icon"
                            />
                            <h3>Classic Espresso</h3>
                            <p>Rich, bold, and perfectly extracted</p>
                            <span className="price">$3.50</span>
                        </div>

                        <div className="menu-item">
                            <img 
                                src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=150&h=150&fit=crop" 
                                alt="Cappuccino"
                                className="menu-icon"
                            />
                            <h3>Velvet Cappuccino</h3>
                            <p>Steamed milk topped with silky foam</p>
                            <span className="price">$4.25</span>
                        </div>

                        <div className="menu-item">
                            <img 
                                src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=150&h=150&fit=crop" 
                                alt="Cold Brew"
                                className="menu-icon"
                            />
                            <h3>Iced Cold Brew</h3>
                            <p>Smooth, refreshing, and naturally sweet</p>
                            <span className="price">$3.75</span>
                        </div>
                    </div>
                </section>

                <section className="features">
                    <h2 className="features-title">Why Choose CafeBeans?</h2>

                    <div className="feature-list">
                        <div className="feature">
                            <img 
                                src="https://th.bing.com/th/id/OIP.-ZQNg36trE9Qq3eH72-mSQHaHa?w=179&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                                alt="Delivery"
                                className="feature-icon"
                            />
                            <h4>Fast Delivery</h4>
                            <span>Hot coffee at your doorstep in 30 minutes</span>
                        </div>

                        <div className="feature">
                            <img 
                                src="https://www.bing.com/th/id/OIP.NPKcypkjlLFp1z-u8GVoWAHaHa?w=179&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                                alt="Payments"
                                className="feature-icon"
                            />
                            <h4>All Payments Accepted</h4>
                            <span>Cash, cards, and digital wallets welcome</span>
                        </div>

                        <div className="feature">
                            <img 
                                src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=80&h=80&fit=crop"
                                alt="Quality"
                                className="feature-icon"
                            />
                            <h4>Premium Quality</h4>
                            <span>Ethically sourced beans, expert roasting</span>
                        </div>
                    </div>
                </section>

            </section>
        </div>
    );
}

export default Home;