import React from 'react';
import './ImpactFormation.css';
import mapImage from '../../assets/map.png';

const ImpactFormation = () => {
  return (
    <section className="impact-formation">
      <div className="impact-content">
        <div className="impact-header">
          <h2>Impact de la formation sur les équipes</h2>
        </div>
        <div className="impact-body">
          <div className="impact-left">
            <img src={mapImage} alt="Map Illustration" className="impact-map" />
          </div>
          <div className="impact-right">
            <div className="impact-stat">
              <span className="impact-value">- 20%</span>
              <p className="impact-description">Baisse de turn-over</p>
            </div>
            <div className="impact-stat">
              <span className="impact-value">+ 40%</span>
              <p className="impact-description">Développement du chiffre d'affaires</p>
            </div>
            <div className="impact-stat">
              <span className="impact-value">- 70%</span>
              <p className="impact-description">Minimisation des erreurs</p>
            </div>
          </div>
        </div>
        <div className="impact-footer">
          <p>
            La formation continue est un levier stratégique pour le développement des compétences et la compétitivité de l'entreprise.
          </p>
          <span className="impact-source">Boston Consulting Group (BCG), 2016</span>
        </div>
      </div>
    </section>
  );
};

export default ImpactFormation;
