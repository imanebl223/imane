import React, { useState, useEffect } from 'react';
import { FaUsers, FaBookOpen, FaComments, FaUserPlus } from 'react-icons/fa'; // Importation des icônes
import './Methodologie.css';

const Methodologie = () => {

  const [stats, setStats] = useState({
    entreprises: 0,
    formations: 0,
    coachings: 0,
    recrutements: 0,
  });

  // Animation logic for numbers
  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prevStats) => ({
        entreprises: prevStats.entreprises < 30 ? prevStats.entreprises + 1 : 30,
        formations: prevStats.formations < 90 ? prevStats.formations + 1 : 90,
        coachings: prevStats.coachings < 150 ? prevStats.coachings + 1 : 150,
        recrutements: prevStats.recrutements < 200 ? prevStats.recrutements + 1 : 200,
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="methodologie-full-page">
      {/* Section principale avec le titre fixe */}
      <div className="top-section">
        {/* Section gauche avec le grand titre */}
        <div className="left-section">
        
        </div>
      </div>

      {/* Section pour les chiffres avec un background gris transparent en bas */}
      <div className="stats-container">
        <div className="stat-item">
          <div className="stat-description">
            <FaUsers className="icon" />
          </div>
          <span className="stat-number">{stats.entreprises} +</span>
          <div className="stat-text">Entreprises accompagnées</div>
        </div>
        <div className="stat-item">
          <div className="stat-description">
            <FaBookOpen className="icon" />
          </div>
          <span className="stat-number">{stats.formations} +</span>
          <div className="stat-text">Formations Assurées</div>
        </div>
        <div className="stat-item">
          <div className="stat-description">
            <FaComments className="icon" />
          </div>
          <span className="stat-number">{stats.coachings} +</span>
          <div className="stat-text">Coachings d‘équipes et individuels</div>
        </div>
        <div className="stat-item">
          <div className="stat-description">
            <FaUserPlus className="icon" />
          </div>
          <span className="stat-number">{stats.recrutements} +</span>
          <div className="stat-text">Recrutements réussis</div>
        </div>
      </div>
    </div>
  );
  
};

export default Methodologie;





