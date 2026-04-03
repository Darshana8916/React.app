import "./about.css"
import Navbar from "./navbar.jsx";  
import "./navbar.css";
function About() {
    return (

        <div className="home">
            <header className="header">
                <h1 className="title">
                    CAFEBEANS!!
                    <img src="https://static.vecteezy.com/system/resources/previews/010/160/674/original/coffee-icon-sign-symbol-design-free-png.png" alt="coffee" className="coffee-icon" />
                </h1>
              
            </header>
            
               <Navbar active ="about"/>

            <main className="main">
                <h2 className="about-title">About CafeBeans</h2>

                <div className="about-content">
                    <p className="about-description">
                        Welcome to CafeBeans, your cozy corner for exceptional coffee experiences.
                        We're passionate about serving the finest artisanal coffee in a warm, welcoming atmosphere.
                    </p>

                    <div className="about-highlights">
                        <div className="highlight">
                            <h3>Our Story</h3>
                            <p>Founded in 2010, we started as a small family-owned shop and grew into a beloved community favorite.</p>
                        </div>

                        <div className="highlight">
                            <h3>Our Mission</h3>
                            <p>To serve great coffee that brings people together and creates memorable moments.</p>
                        </div>

                        <div className="highlight">
                            <h3>Our Values</h3>
                            <p>Quality beans, sustainable practices, and genuine connections with our community.</p>
                        </div>

                        <div className="highlight">
                            <h3>Visit Us</h3>
                            <p>Come experience our warm atmosphere and exceptional service. Open daily from 7AM to 8PM.</p>
                        </div>
                    </div>

                    <p className="about-tagline">"Sip. Smile. Repeat."</p>
                </div>
            </main>
        </div>
    );
}

export default About;