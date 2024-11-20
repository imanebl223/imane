import React, { useState, useEffect } from 'react';
import './ServicesPage.css';

const services = [
  {
    id: '#formation-continue',
    title: 'Formation continue',
    intro: 'Notre cabinet vous propose des solutions de formation continue adaptées à vos besoins spécifiques et à votre secteur d’activité.',
    details: [
      'Programmes sur mesure',
      'Sessions interactives',
      'Suivi pédagogique personnalisé',
      'Résultats mesurables',
      'Remboursement jusqu’à 70% UG/CSF-OFPPT - GIAC'
    ],
    image: '/src/assets/formation.jpg',
  },
  {
    id: '#accompagnement-consulting',
    title: 'Accompagnement - Consulting',
    intro: 'Levier stratégique pour la résolution des problèmes complexes de l\'entreprise',
    details: [
      'DIAGNOSTIQUER - Analyse complète de la situation',
      'CONCEVOIR - Conception de solutions sur mesure, Remboursement de vos projets',
      'METTRE EN ŒUVRE - Accompagnement à la mise en œuvre de la solution proposée et ajustement'
    ],
    image: '/src/assets/accom.jpg',
  },
  {
    id: '#ingenierie-formation',
    title: 'Ingénierie de formation',
    intro: 'Bénéficiez de notre expertise pour concevoir et mettre en place des plans de formation efficaces et rentables.',
    details: [
      'Réalisation des actions d’ingénierie de formation',
      'Mise en place d\'un plan de formation adapté',
      'Démarches et procédures GIAC',
      'Remboursement jusqu’à 70% du coût des actions d’ingénierie de formation (externe)',
      'Réalisation du plan de formation'
    ],
    image: '/src/assets/ingenierie.jpg',
  },
  {
    id: '#recrutement',
    title: 'Recrutement',
    intro: 'Notre service de recrutement assure une sélection rigoureuse et un suivi post-intégration pour garantir votre satisfaction.',
    details: [
      'Compréhension des besoins',
      'Sourcing des talents',
      'Entretiens personnalisés',
      'Sélection des meilleurs profils',
      'Suivi post-intégration',
    ],
    image: '/src/assets/recrutement.jpg',
  }
];

const ServicesPage = () => {
  const [activeSection, setActiveSection] = useState('#formation-continue');

  const handleLinkClick = (sectionId) => {
    setActiveSection(sectionId);

    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    services.forEach((service) => {
      const section = document.querySelector(service.id);
      if (section) {
        if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          setActiveSection(service.id);
        }
      }
    });
  };

  useEffect(() => {
    const fragment = window.location.hash; // Récupère l'ID de la section depuis l'URL
    if (fragment) {
      const section = document.querySelector(fragment);
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
        setActiveSection(fragment); // Marque cette section comme active
      }
    }
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div className="hero-about">
        <div className="hero-text">
          <h1>Services</h1>
        </div>
      </div>

      <div className="info-bar">
        {services.map((service) => (
          <a
            key={service.id}
            href={service.id}
            className={`info-link ${activeSection === service.id ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick(service.id);
            }}
          >
            {service.title}
          </a>
        ))}
      </div>

      <div className="container">
        {services.map((service) => (
          <div id={service.id.substring(1)} key={service.id}>
            <div className="service-card">
              <img src={service.image} alt={service.title} className="service-image" />
              <h3 className="service-title">{service.title}</h3>

              {/* Contenu général pour tous les services sauf "Recrutement" */}
              {service.id !== '#recrutement' && (
                <div className="service-details">
                  <p>{service.intro}</p>
                  <ul>
                    {service.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Contenu spécifique au service "Recrutement" */}
              {service.id === '#recrutement' && (
                <div className="recrutement-steps">
                  {service.details.map((step, index) => (
                    <div className="recrutement-step" key={index}>
                      <div className="step-circle">
                        <span>{index + 1}</span>
                      </div>
                      <div className="step-text">
                        <h4>{step}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
