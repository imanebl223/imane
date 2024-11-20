import React from 'react';
import './PointsForts.css';

const PointsForts = () => {
  return (
    <div className="pointsForts-container">
      <div className="pointsForts-header">
        <h2 className="pointsForts-title">Les 3 Raisons</h2>
        <p className="pointsForts-subtitle">de choisir SOLU-PERFORMANCE</p>
        <button className="pointsForts-button">Nos solutions</button>
      </div>

      <div className="pointsForts-grid">
        <div className="pointFort-card">
          <div className="pointFort-number">1</div>
          <div className="pointFort-content">
            <p><strong>Une Expertise Certifiée et Senior</strong><br />
            Tous nos consultants sont des experts seniors agréés, garantissant des interventions de haute qualité et une satisfaction client optimale.</p>
          </div>
        </div>

        <div className="pointFort-card">
          <div className="pointFort-number">2</div>
          <div className="pointFort-content">
            <p><strong>Méthodologie Unique et Amélioration Continue</strong><br />
            Notre méthodologie innovante pousse chaque formation à s'adapter et à améliorer les compétences des équipes, tout en s'alignant sur les objectifs de l'entreprise.</p>
          </div>
        </div>

        <div className="pointFort-card">
          <div className="pointFort-number">3</div>
          <div className="pointFort-content">
            <p><strong>Optimisation des Coûts et Adaptabilité Culturelle</strong><br />
            Nous optimisons les coûts des interventions tout en nous adaptant parfaitement à la culture et au contexte spécifique de chaque entreprise.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PointsForts;
