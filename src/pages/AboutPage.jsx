import React from 'react';
import '../styles/AboutPage.css';
import Container from '../components/Container';
import AboutPic from '../assets/About_Pic.png';

export default function AboutPage() {
    return (
        <Container>
            <h2 className="title">Behind The Curtin</h2>
            <section className="about">
                <img src={AboutPic} alt="About Us" />
                <div className="text">
                    <h1>Rado Design Studio</h1>
                    <h1>was born from</h1>
                    <h1><span className="blue">movement</span>.</h1>
                </div>
            </section>
            <section className="description">
                <p>
                    Across states waves snow and ideas. The name "Rado" came to life when I joined a rugby team after moving from Colorado. It felt right. Short in length bold in sound and full of wild creativity—Rado stuck and so did the spirit behind it.
                    <br /><br />
                    I'm Rado—a designer developer and free spirit at heart. Whether I’m riding waves carving lines in fresh powder or slow-cooking something in the kitchen I’m always creating. That energy flows into my work: crafting brands building websites and designing visuals that don’t just look good—they feel alive.
                    <br /><br />
                    Rado Design Studio is where creativity meets freedom. No stale templates. No cookie-cutter branding. Just custom work for people and businesses who want to stand out and move with intention.
                    <br /><br />
                    Whether you’re looking for a logo that tells your story a website that performs as beautifully as it looks or promo materials that make people stop and pay attention—this is where your next chapter begins.
                    </p>
            </section>
            <div className="cta-container">
                <button>Let's Talk</button>
            </div>
            
        </Container>
    );
    }