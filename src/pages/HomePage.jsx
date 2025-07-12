import React from 'react';
import '../styles/HomePage.css';
import Container from '../components/Container';
import Hero from '../assets/RDS_Main.svg';

export default function HomePage() {
    return (
        <Container>
            <div className="hero">
                <img src={Hero} alt="Rado Design Studio"/>
            </div>
            <div className="home-page">
                <h1>Welcome to Rado Design Studio</h1>
                <p>Your one-stop solution for all design needs.</p>
                <p>Explore our services, check out our work, or get in touch!</p>
            </div>
        </Container>
    );
}