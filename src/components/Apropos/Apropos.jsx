import React, { useState } from 'react';
import { FaBullseye, FaEye } from 'react-icons/fa';
import './Apropos.css';
import about from '../../assets/about.png';

const Apropos = () => {
  const [activeTab, setActiveTab] = useState('mission');

  return (
    <div id="apropos-section" className="apropos-section">
      <div className="apropos-content">
        <div className="text-left">
          <p>
            Fondé en Janvier 2020, Solu-performance est un cabinet de formation et de conseil
            spécialisé en management et performance commerciale. Nous offrons une expertise
            qui allie le développement des talents, le renforcement du leadership, et
            l'optimisation des performances de l'individu et de l'entreprise.
          </p>

          <div className="tab-container">
            <div
              className={`tab mission-tab ${activeTab === 'mission' ? 'active' : ''}`}
              onClick={() => setActiveTab('mission')}
            >
              <FaBullseye className="tab-icon" /> Mission
            </div>
            <div
              className={`tab vision-tab ${activeTab === 'vision' ? 'active' : ''}`}
              onClick={() => setActiveTab('vision')}
            >
              <FaEye className="tab-icon" /> Vision
            </div>
          </div>

          <div className={`tab-content ${activeTab === 'mission' ? 'active' : ''}`}>
            <p>
              Optimiser les performances humaines pour soutenir durablement la croissance des entreprises.
            </p>
          </div>
          <div className={`tab-content ${activeTab === 'vision' ? 'active' : ''}`}>
            <p>
              Devenir le partenaire inédit des entreprises, grâce à des solutions innovantes, 
              sur mesure et une expertise inégalée.
            </p>
          </div>
        </div>

        <div className="image-right">
          <img src={about} alt="General Manager" />
        </div>
      </div>
    </div>
  );
};

export default Apropos;
