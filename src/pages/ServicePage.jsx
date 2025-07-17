import React from 'react';
import { useParams } from 'react-router-dom';
import servicesData from '../data/servicesData';
import Container from '../components/Container';
// import '../styles/ServicePage.css';

export default function ServicePage() {
  const { serviceSlug } = useParams();

  const toSlug = (str) =>
    str.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');

  const service = servicesData.find(
    (s) => `${toSlug(s.title)}-services` === serviceSlug
  );

  if (!service) {
    <Container>
      return <div>Service not found.</div>;
    </Container>
  }

  return (
    <Container>
      <section className="service-page">
      {service.heading.split('\n').map((line, idx) => (
        <h1 key={idx} dangerouslySetInnerHTML={{ __html: line }} />
      ))}
        <p>{service.description}</p>
        <h2 className="title">{service.service}</h2>

        <div className="service-details">
          {service.serviceDetails?.serviceComponents.map((component) => (
            <div key={component.id} className="service-component">
              <h2>{component.name}</h2>
              <p>{component.description}</p>
              <ul>
                {component.points.map((point, index) => (
                  <li key={index}>
                    {point.checked ? '✔️' : '▫️'} {point.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="why-rds">
          <h2 className="title">Why RDS?</h2>
          <p>{service.whyRDS}</p>
          <a className="button" href={service.button.link}>
            {service.button.text}
          </a>
        </div>
      </section>
    </Container>
  );
}
