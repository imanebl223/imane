import React from 'react';
import './Expertise.css'; // Importation du fichier CSS
import expertiseImage from '../../assets/expertise.png'; // Assurez-vous que le chemin est correct

const Expertise = () => {
  return (
    <div className="expertise-container">
      <div className="expertise-image-container">
        <img src={expertiseImage} alt="Expertise" className="expertise-image" />
      </div>
      <div className="expertise-content">
        <div className="expertise-item">
          <h3 className="expertise-heading">Développement de leadership et management</h3>
          <p className="expertise-description">
            Nous développons des leaders inspirants et visionnaires pour guider le changement et l'innovation avec un management agile.
          </p>
        </div>

        <div className="expertise-item">
          <h3 className="expertise-heading">Vente et performance commerciale</h3>
          <p className="expertise-description">
            Nous optimisons les compétences et les stratégies commerciales pour améliorer le chiffre d’affaires et faire plus d’économies pour l’entreprise.
          </p>
        </div>

        <div className="expertise-item">
          <h3 className="expertise-heading">Solutions de ressources humaines</h3>
          <p className="expertise-description">
            Nous soutenons les entreprises dans le développement de leur patrimoine humain et la mise au point de plans adaptés bénéficiant d’un regard externe et professionnel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
