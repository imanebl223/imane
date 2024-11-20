import React from 'react';
import './Services.css';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpg';

const services = [
  {
    title: 'Formation continue',
    description: 'Avec un catalogue de formations, nouveau et varié, vous aurez plus que l\'essentiel pour développer les compétences de vos collaborateurs.',

    image: image1,
    id: '#formation-continue',
  },
  {
    title: 'Accompagnement - Consulting',
    description: 'Résolution des problèmes complexes. De l’identification du besoin, jusqu’à la mise en place de solutions.',
    
    image: image2,
    id: '#accompagnement-consulting',
  },
  {
    title: 'Ingénierie de formation',
    description: 'Accompagnement et montage des dossiers administratifs, techniques et financiers pour avoir un remboursement de 70 % de vos projets de formation.',
   
    image: image3,
    id: '#ingenierie-formation',
  },
  {
    title: 'Recrutement',
    description: 'Nous vous accompagnons au recrutement des meilleurs profils avec un processus fiable et flexible.',
   
    image: image4,
    id: '#recrutement',
  },
];

const Services = () => {
  const handleButtonClick = (id) => {
    window.location.hash = id; // Update the URL hash
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="services-container">
      {services.map((service, index) => (
        <div key={index} className="service-card">
          <img src={service.image} alt={service.title} className="service-image" />
          <h3 className="service-title">{service.title}</h3>
          
          {/* Section masquée par défaut */}
          <div className="service-details">
            <p>{service.description}</p>
            <button
              className="service-button"
              onClick={() => handleButtonClick(service.id)}
            >
              {service.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
