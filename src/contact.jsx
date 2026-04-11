import "./contact.css"
import Navbar from "./navbar.jsx";  
import "./navbar.css";

function Contact() {
    return (
        <div className="contact">
            <header className="header">
                <h1 className="title">
                    CAFEBEANS!!
                    <img src="https://static.vecteezy.com/system/resources/previews/010/160/674/original/coffee-icon-sign-symbol-design-free-png.png" alt="coffee" className="coffee-icon" />
                </h1>
            </header>

              <Navbar active ="contact"/>

            <main className="main">
                <h2 className="contact-title">Contact Us</h2>

                <div className="contact-container">
                    <div className="contact-card location-card">
                        <h3>Get In Touch</h3>
                        <p>We'd love to hear from you! Reach out for reservations, feedback, or just to say hello.</p>

                        <div className="contact-details">
                            <div className="detail-item">
                                <h4>📍 Location</h4>
                                <a href="https://maps.app.goo.gl/ABrdbAVsvGXwRLfo9">More Marg, K.N, Patil Ln, off College Road, beside Sarvaangi Saree & City Union Bank, Patil Colony, Nashik, Maharashtra 422005</a>
                            </div>
                            <div className="detail-item">
                                <h4>📞 Phone</h4>
                                <a href="tel:8600819787">8600819787</a>
                                <p>Mon-Sun: 7AM - 8PM</p>
                            </div>
                            <div className="detail-item">
                                <h4>✉️ Email</h4>
                                <a href="mailto:akshatadawange86@gmail.com">akshatadawange86@gmail.com</a>
                                <p>We reply within 24 hours</p>
                            </div>

                        </div>
                    </div>

                    <div className="contact-card form-card">
                        <h3>Send us a Message</h3>
                        <form className="contact-form" onSubmit={(e) => {
                            e.preventDefault();
                            const formData = new FormData(e.target);
                            localStorage.setItem('contactData', JSON.stringify(Object.fromEntries(formData)));
                            alert('Message sent!');
                        }}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" id="subject" name="subject" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" required></textarea>
                            </div>

                            <button type="submit" className="submit-btn">Send Message</button>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Contact;