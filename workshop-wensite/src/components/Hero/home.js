import React, { useState } from 'react';
import logoImg from './images/ChatGPT Image Mar 8, 2026, 10_30_09 AM.png';
import './Hero.css';

const Hero = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [galleryFilter, setGalleryFilter] = useState('installation');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // CSV Generation Logic
        const headers = ["Name", "Email", "Phone", "Message"];
        const row = [formData.name, formData.email, formData.phone, formData.message.replace(/\n/g, " ")];
        const csvContent = [headers, row].map(e => e.join(",")).join("\n");

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", `Quote_Request_${formData.name || 'User'}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Reset form
        setFormData({ name: '', email: '', phone: '', message: '' });
        alert("Quote request downloaded as CSV!");
    };

    const galleryImages = [
        { src: '/images/gallery/gate1.png', category: 'installation' },
        { src: '/images/gallery/gate2.png', category: 'installation' },
        { src: '/images/gallery/stair1.png', category: 'installation' },
        { src: '/images/gallery/window1.png', category: 'installation' },
        { src: '/images/gallery/balcony1.png', category: 'design' },
        { src: '/images/gallery/door1.png', category: 'design' },
        { src: '/images/gallery/gate1.png', category: 'design' },
        { src: '/images/gallery/gate2.png', category: 'design' },
        { src: '/images/gallery/stair1.png', category: 'installation' },
        { src: '/images/gallery/window1.png', category: 'design' },
        { src: '/images/gallery/balcony1.png', category: 'installation' },
        { src: '/images/gallery/door1.png', category: 'installation' }
    ];

    const filteredImages = galleryImages.filter(img => img.category === galleryFilter);

    return (
        <div className="hero-shell" id="home">
            <header className="navbar">
                <nav className="nav-container">
                    <div className="nav-logo">
                        <a href="#home"><img src={logoImg} alt="Kavitha Welding" className="logo-img" /></a>
                    </div>

                    <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>

                    <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                        <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
                        <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About Us</a></li>
                        <li><a href="#photos" onClick={() => setIsMenuOpen(false)}>Photos</a></li>
                        <li><a href="#company" onClick={() => setIsMenuOpen(false)}>Company</a></li>
                        <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
                    </ul>
                </nav>
            </header>

            <main className="hero-main">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1 className="hero-title">
                        <span className="title-top">Premium Iron Doors</span>
                        <div className="title-bottom">
                            <span className="divider"></span>
                            <span className="amp">& Grills</span>
                            <span className="divider"></span>
                        </div>
                    </h1>

                    <h2 className="hero-subtitle">Quality Craftsmanship & Design</h2>


                </div>
            </main>

            <section id="photos" className="full-gallery-section">
                <div className="gallery-header">
                    <h2>Gallery</h2>
                </div>

                <div className="gallery-content-area">
                    <div className="gallery-filter-toggle">
                        <button
                            className={galleryFilter === 'installation' ? 'active' : ''}
                            onClick={() => setGalleryFilter('installation')}
                        >
                            Installation Photos
                        </button>
                        <button
                            className={galleryFilter === 'design' ? 'active' : ''}
                            onClick={() => setGalleryFilter('design')}
                        >
                            Design Catalog
                        </button>
                    </div>

                    <div className="full-gallery-grid">
                        {filteredImages.map((img, index) => (
                            <div className="full-gallery-item" key={index}>
                                <img src={img.src} alt={`Iron Work ${index + 1}`} />
                                <div className="full-gallery-overlay">
                                    <div className="zoom-icon">+</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="about" className="about-us-section">
                <div className="gallery-header">
                    <h2>About Us</h2>
                </div>

                <div className="about-content-area">
                    <div className="about-hero-text">
                        <h3>20+ Years of Experience in<br />Iron Fabrication</h3>
                        <div className="about-divider"></div>
                        <p className="about-subtitle-text">Leading Manufacturer of Iron Doors, Gates & Grills</p>
                    </div>

                    <div className="about-features">
                        <div className="feature-item">
                            <div className="feature-icon">
                                <div className="icon-gold-box">
                                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" /></svg>
                                </div>
                            </div>
                            <div className="feature-text">
                                <h4>High Quality Craftsmanship</h4>
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">
                                <div className="icon-gold-box">
                                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" /></svg>
                                </div>
                            </div>
                            <div className="feature-text">
                                <h4>Custom Designs & Fabrication</h4>
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">
                                <div className="icon-gold-box">
                                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" /></svg>
                                </div>
                            </div>
                            <div className="feature-text">
                                <h4>Serving Residential & Commercial Clients</h4>
                            </div>
                        </div>
                    </div>

                    <div className="about-details-grid">
                        <div className="detail-item">
                            <img src="/images/gallery/door1.png" alt="Iron Door Detail" />
                        </div>
                        <div className="detail-item">
                            <img src="/images/gallery/stair1.png" alt="Stair Railing Detail" />
                        </div>
                        <div className="detail-item">
                            <img src="/images/gallery/gate1.png" alt="Gate Detail" />
                        </div>
                    </div>
                </div>
            </section>            <section id="contact" className="contact-section">
                <div className="gallery-header">
                    <h2>Contact Us</h2>
                </div>

                <div className="contact-container">
                    <div className="contact-subtitle">
                        <div className="contact-dash"></div>
                        <h3>Get In Touch With Us Today!</h3>
                        <div className="contact-dash"></div>
                    </div>

                    <div className="contact-split">
                        <div className="contact-info">
                            <div className="info-row">
                                <div className="info-icon">
                                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                                </div>
                                <div className="info-text">
                                    <p className="label">Call Us:</p>
                                    <p className="value">9360355163</p>
                                </div>
                            </div>

                            <div className="info-row">
                                <div className="info-icon">
                                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01C17.18 3.03 14.69 2 12.04 2z" /></svg>
                                </div>
                                <div className="info-text">
                                    <p className="label">WhatsApp:</p>
                                    <p className="value">8124138176</p>
                                </div>
                            </div>

                            <div className="info-row">
                                <div className="info-icon">
                                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                                </div>
                                <div className="info-text">
                                    <p className="label">Visit Us:</p>
                                    <p className="value">kannar kanni kavil street thottapalyam vellore - 632004</p>
                                </div>
                            </div>

                            <div className="info-row">
                                <div className="info-icon">
                                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" /></svg>
                                </div>
                                <div className="info-text">
                                    <p className="label">Opening Hours:</p>
                                    <p className="value">Mon - Sat: 10am - 6.30pm</p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form-card">
                            <h3>Get a Quote</h3>
                            <div className="form-divider"></div>
                            <form className="quote-form" onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                />
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                ></textarea>
                                <button type="submit" className="btn-send">Send Message</button>
                            </form>
                        </div>
                    </div>

                </div>
            </section>

            <footer className="footer-section">
                <div className="footer-container">
                    <p>© 2026 Kavitha Welding Works. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Hero;
