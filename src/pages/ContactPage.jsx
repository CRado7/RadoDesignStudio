import React from 'react';
import '../styles/ContactPage.css';
import Container from '../components/Container';
import BlobGradient from '../components/BlobGradient';
import rdsLogo from '../assets/RDS_Nav.svg';

export default function ContactPage() {
    return (
        <Container>
            <div className="contact-page">
                <div className="contact-image">
                    <img src={rdsLogo} alt="Rado Design Studio Logo" className="logo" />
                    <BlobGradient />
                </div>
                <h2 className="title">Put Ideas in Motion</h2>
                
                <form>
                    <input type="text" id="name" name="name" placeholder="Name (Business or Personal)" required />
            
                    <input type="email" id="email" name="email" placeholder="Email" required />

                    <select id="project-type" name="project-type" required>
                        <option value="" disabled selected>Project Type</option>
                        <option value="web">Web</option>
                        <option value="brand">Brand</option>
                        <option value="web-brand">Web + Brand</option>
                        <option value="promo">Promo</option>
                    </select>

                    <input type="text" id="phone" name="phone" placeholder="Phone (optional)" />
            
                    <textarea id="message" name="message" placeholder="Message" required></textarea>
            
                    <button type="submit">Send</button>
                </form>
            </div>
        </Container>
    );
    }