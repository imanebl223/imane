import React from 'react';
import './Solutions.css';

const Solutions = ({ service, index }) => {
  const isImageRight = index % 2 === 1;

  return (
    <div className={`service-section ${isImageRight ? 'image-right' : 'image-left'}`} style={{ marginBottom: '50px' }}>
      <div className="text-container">
        <h2>{service.title}</h2>
        <p>{service.intro}</p>

        {service.title === 'Ingénierie de formation' ? (
          <ul className="service-details">
            <li>Réalisation des actions d’ingénierie de formation.</li>
            <li>Mise en place d'un plan de formation adapté.</li>
            <li>Démarches et procédures GIAC.</li>
            <li>Remboursement jusqu’à 70% du coût des actions d’ingénierie de formation (externe).</li>
            <li>Réalisation du plan de formation.</li>
          </ul>
        )  : service.title === 'Recrutement' ? (
          <div className="recruitment-steps-container">
            <div className="recruitment-step">
              <span>1</span>
              <p>Compréhension du besoin</p>
            </div>
            <div className="recruitment-step">
              <span>2</span>
              <p>Sourcing</p>
            </div>
            <div className="recruitment-step">
              <span>3</span>
              <p>Entretiens</p>
            </div>
            <div className="recruitment-step">
              <span>4</span>
              <p>Sélection</p>
            </div>
            <div className="recruitment-step">
              <span>5</span>
              <p>Suivi post-intégration (Garantie de changement)</p>
            </div>
          </div>
        ) : service.title === 'Accompagnement - Consulting' ? (
          <div className="process-container">
            <div className="process-step">
              <h3>Diagnostiquer</h3>
              <p>Analyse complète de la situation</p>
            </div>
            <div className="process-step">
              <h3>Concevoir</h3>
              <p>Conception de solutions sur mesure</p>
            </div>
            <div className="process-step">
              <h3>Mettre en œuvre</h3>
              <p>Accompagnement à la mise en œuvre de la solution proposée et ajustement</p>
            </div>
          </div>
        ) : (
          <ul className="service-details">
            {service.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="image-container">
        <img src={service.imageSrc} alt={service.title} />
      </div>
    </div>
  );
};

export default Solutions;
