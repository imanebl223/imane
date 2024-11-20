import React from 'react';
import './TeamSection.css';
import Formateursexpérimentés from '../../assets/cons1.png';
import Consultantsseniors from '../../assets/cons2.png';
import Équipebackoffice from '../../assets/cons3.png';


const TeamSection = () => {
  return (
    <div className="team-section">
      <div className="team-container">
        <div className="team-card">
          <div className="team-image-wrapper">
          <img src={Formateursexpérimentés} alt="Formateurs expérimentés" className="team-image" />

<img src={Équipebackoffice} alt="Équipe back office" className="team-image" />

          </div>
          <h3 className="team-role">Formateurs expérimentés</h3>
          <p className="team-description">
            Coaches - Formateurs avec 10 d’expérience minimum dans le domaine de la formation, agréés Solu-performance
          </p>
        </div>

        <div className="team-card">
          <div className="team-image-wrapper">
          <img src={Consultantsseniors} alt="Consultants seniors" className="team-image" />
          </div>
          <h3 className="team-role">Consultants seniors</h3>
          <p className="team-description">
            Des experts, fournissant un regard externe efficace pour la résolution des problèmes complexes de l'entreprise.
          </p>
        </div>

        <div className="team-card">
          <div className="team-image-wrapper">
          <img src={Équipebackoffice} alt="Équipe back office" className="team-image" />
          </div>
          <h3 className="team-role">Équipe back office</h3>
          <p className="team-description">
            Agents qualifiés pour la gestion administrative et le suivi procédural des méthodes d'accompagnement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
