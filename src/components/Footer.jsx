import React from 'react';
import { Link } from 'react-router-dom';
import RDS from '../assets/RDS_Footer.svg';
import Instagram from '../assets/Instagram.svg';
import BlobGradient from '../components/BlobGradient';
import '../styles/Footer.css';

export default function Footer() {
    return (
        <footer>
            <BlobGradient />
            <div className="footer-content">
                <div className="footer-logo">
                    <Link to="/">
                        <img src={RDS} alt="Rado Design Studio" />
                    </Link>
                    <a href="mailto:christopher.ferraro34@gmail.com">Email Me</a>
                    <a href="tel:+7743923956">Call Me</a>
                </div>
                <div className="footer-links">
                    <Link to="/our-work">Work</Link>
                    <Link to="/about">About</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/pricing-packages">Packages</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <div className="social-links">
                    <a href="https://www.instagram.com/rado_design_studio/" target="_blank" rel="noopener noreferrer">
                        <img src={Instagram} alt="Instagram" />
                    </a>
                </div>
            </div>
            <p>&copy; {new Date().getFullYear()} Rado Design Studio. All rights reserved.</p>
            <p>Designed and Developed by Rado Design Studio</p>
        </footer>
    );
}