import React from 'react';
import '../styles/PackagesPage.css';
import Container from '../components/Container';
import Card from '../components/Card';
import packagesData from '../data/packagesData';

export default function PackagesPage() {
    return (
        <Container>
            <div className="flex about">
                <div className="text">
                    <h1><span className="blue">Creative</span> Packages,</h1>
                    <h1>Designed to <span className="blue">Move</span></h1>
                    <h1>With <span className="blue">You</span>.</h1>
                </div>
                <p>
                    Whether you're building from scratch or leveling up your look, Rado Design Studio offers tailored packages that meet you where you are - and grow with you.
                    <br /><br />
                    No templates. No one-size-fits-all fluff. Just hand crafted branding, web, and promo design with real soul behind it. From a quick logo drop to the full brand-and-web ecperience, each package is designed to help you move with intention - and stand out with style.
                </p>
            </div>
            <section className="packages-section">
                {/* Brand Packages */}
                <h2 className="title">{packagesData.brandPackages.heading}</h2>
                <div className="package-list brand">
                {packagesData.brandPackages.packages.map((pkg, index) => (
                    <Card key={index} {...pkg}>
                        <div className="card-content">
                            <h2 className="package-name">{pkg.name}</h2>
                            <h4 className="package-content">{pkg.content}</h4>
                            <p className="package-description">{pkg.description}</p>
                        </div>
                        <p className="package-price">
                            {pkg.startsAt ? 'Starting at ' : ''}${pkg.price}
                            {pkg.astrix && <sup>*</sup>}
                        </p>
                        {pkg.footnote && <p className="package-footnote"> <sup>*</sup>{pkg.footnote}</p>}
                    </Card>
                ))}
                </div>

                {/* Creative Support */}
                <h2 className="title">{packagesData.creativeSupport.heading}</h2>
                <div className="package-list">
                {packagesData.creativeSupport.packages.map((plan, index) => (
                    <Card key={index} {...plan}>
                        <div className="card-content">
                            <h2 className="package-name">{plan.name}</h2>
                            <p className="package-hours">{plan.hours}</p>
                            <p className="package-ideal">{plan.idealFor}</p>
                        </div>
                        <p className="package-price">
                            ${plan.price}
                            {plan.hourly && <span className="hourly-rate"> (${plan.hourly}/hr)</span>}
                            {plan.astrix && <sup>*</sup>}
                        </p>
                        {plan.footnote && <p className="package-footnote"><sup>*</sup>{plan.footnote}</p>}
                    </Card>
                ))}
                </div>
            </section>
        </Container>
    );
}