import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';
import Container from '../components/Container';
import Hero from '../assets/RDS_Main.svg';
import servicesData from '../data/servicesData';
import prpjectData from '../data/projectData';
import BlobGradient from '../components/BlobGradient';

export default function HomePage() {
    const featuredProjects = prpjectData.filter((project) => project.featured);
    const [selectedProject, setSelectedProject] = useState(featuredProjects[0]);

    return (
        <Container>
            <section className="hero">
                <img src={Hero} alt="Rado Design Studio"/>
            </section>
            <section className="tagline">
                <h1>Design in <span className="blue">Motion</span>.</h1>
                <h1>Brands with <span className="blue">Soul</span>.</h1>
            </section>
            <section className="intro inner-container">
                <div className="intro-left">
                    <p>
                        Rado Design Studio is a one-person creative shop powered by freedom, movement, and bold design.
                        From logos to websites to standout promo materials - I build brands that feel as alive and original as the people behind them.
                    </p>
                </div>
                <div className="intro-right">
                    <Link to="/about"><button>More About RDS</button></Link>
                </div>
            </section>
            <section className="services-container">
            <h2 className="title">Services</h2>
                <div className="services">
                    {servicesData.map((service) => (
                    <Link
                        to={`/services/${encodeURIComponent(service.title.toLowerCase())}-services`}
                        key={service.id}
                        className="service"
                    >
                        <BlobGradient />
                        <div className="service-content">
                            <h3>{service.title}</h3>
                            <span className="blue large-text">{service.tag}</span>
                        </div>
                    </Link>
                    ))}
                </div>
            </section>
            <section className="featured-container">
                <h2 className="title">Featured Work</h2>

                <ul className="project-list">
                    {featuredProjects.map((project) => (
                    <li key={project.id}>
                        <h4
                        className={`${
                            selectedProject?.id === project.id ? 'active' : ''
                        }`}
                        onClick={() => setSelectedProject(project)}
                        >
                        {project.title}
                        </h4>
                    </li>
                    ))}
                </ul>

                {selectedProject && (
                    <div className="project-preview">
                    <Link to={`/our-work/${encodeURIComponent(selectedProject.title.toLowerCase())}`}>
                        <img src={selectedProject.image} alt={selectedProject.title} />
                    </Link>
                    <p className="blue">{selectedProject.tag}</p>
                    </div>
                )}

                <Link to="/our-work"><button>See All Work</button></Link>
            </section>
            <section className="cta-container">
                <h2>It starts with</h2>
                <span className="blue xl-text">soul</span>
                <h2>and ends with</h2>
                <span className="blue xl-text">impact</span>
                <button className="extra-margin">Let's Talk</button>
            </section>
        </Container>
    );
}