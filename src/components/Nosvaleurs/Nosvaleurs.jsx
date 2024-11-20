import React from 'react';
import { FaHandshake, FaBolt, FaStar } from 'react-icons/fa'; // Importing icons from react-icons
import './Nosvaleurs.css';

const Nosvaleurs = () => {
  return (
    <section className="values-section">
 
      <div className="values-list">
        <div className="value-item">
          <FaHandshake className="icon" />
          <h3 className="value-title">CONFIANCE</h3>
          <p className="value-description">Agir avec transparence et intégrité dans toutes nos interactions.</p>
        </div>
        <div className="value-item">
          <FaBolt className="icon" />
          <h3 className="value-title">COURAGE</h3>
          <p className="value-description">Oser innover et prendre des décisions audacieuses pour atteindre l'excellence.</p>
        </div>
        <div className="value-item">
          <FaStar className="icon" />
          <h3 className="value-title">TOUS GAGNANTS</h3>
          <p className="value-description">Créer des solutions où chaque partie prenante bénéficie et prospère.</p>
        </div>
      </div>
    </section>
  );
};

export default Nosvaleurs;
