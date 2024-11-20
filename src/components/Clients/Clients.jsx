import React from 'react';
import './Clients.css'; // Le fichier CSS associé

// Importation des logos
import logo1 from '../../assets/logo1.png';
import logo2 from '../../assets/logo2.png';
import logo3 from '../../assets/logo3.png';
import logo4 from '../../assets/logo4.png';
import logo5 from '../../assets/logo5.png';
import logo6 from '../../assets/logo6.png';
import logo7 from '../../assets/logo7.png';
import logo8 from '../../assets/logo8.png';
import logo9 from '../../assets/logo9.png';
import logo10 from '../../assets/logo10.png';
import logo11 from '../../assets/logo11.png';
import logo12 from '../../assets/logo12.png';
import logo13 from '../../assets/logo13.png';
import logo14 from '../../assets/logo14.png';
import logo15 from '../../assets/logo15.png';
import logo16 from '../../assets/logo16.png';
import logo17 from '../../assets/logo17.png';
import logo18 from '../../assets/logo18.png';
import logo19 from '../../assets/logo19.png';
import logo20 from '../../assets/logo20.png';
import logo21 from '../../assets/logo21.png';
import logo22 from '../../assets/logo22.png';
import logo23 from '../../assets/logo23.png';
import logo24 from '../../assets/logo24.png';
import logo25 from '../../assets/logo25.png';

const Clients = () => {
  const clients = [
    { id: 1, logo: logo1 },
    { id: 2, logo: logo2 },
    { id: 3, logo: logo3 },
    { id: 4, logo: logo4 },
    { id: 5, logo: logo5 },
    { id: 6, logo: logo6 },
    { id: 7, logo: logo7 },
    { id: 8, logo: logo8 },
    { id: 9, logo: logo9 },
    { id: 10, logo: logo10 },
    { id: 11, logo: logo11 },
    { id: 12, logo: logo12 },
    { id: 13, logo: logo13 },
    { id: 14, logo: logo14 },
    { id: 15, logo: logo15 },
    { id: 16, logo: logo16 },
    { id: 17, logo: logo17 },
    { id: 18, logo: logo18 },
    { id: 19, logo: logo19 },
    { id: 20, logo: logo20 },
    { id: 21, logo: logo21 },
    { id: 22, logo: logo22 },
    { id: 23, logo: logo23 },
    { id: 24, logo: logo24 },
    { id: 25, logo: logo25 },
  ];

  // Gestion d'erreur de chargement d'image
  const handleImageError = (event) => {
    event.target.src = 'path/to/defaultLogo.png'; // Remplacez par le chemin de votre logo par défaut
    event.target.alt = 'Image non disponible';
  };

  return (
    <div className="clients-container">
      <div className="clients">
        {clients.concat(clients).map((client) => ( // Dupliquer les clients pour le défilement
          <div className="client-logo" key={client.id}>
            <img
              src={client.logo}
              alt="Client Logo"
              onError={handleImageError} // Ajout de la gestion d'erreur
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
