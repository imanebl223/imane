import React, { useState, useEffect } from 'react';
import Apropos from "../Apropos/Apropos";
import Services from "../Services/Services";
import './AboutPage.css';

import PointsForts from '../PointsForts/PointsForts';
import Nosvaleurs from '../Nosvaleurs/Nosvaleurs';
import TeamSection from '../TeamSection/TeamSection';

const AboutPage = () => {
  // Etat pour la section active
  const [activeSection, setActiveSection] = useState('#qui-nous-sommes');

  // Fonction pour gérer le clic sur un lien
  const handleLinkClick = (sectionId) => {
    setActiveSection(sectionId);

    const element = document.querySelector(sectionId);
    if (element) {
      // Défilement fluide vers la section, centrée verticalement
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center', // Aligner l'élément au centre de la fenêtre
      });
    }
  };

  // Liste des liens pour la navigation
  const navLinks = [
    { id: '#apropos', label: 'Qui sommes-nous ?' },
    { id: '#pourquoi-choisir', label: 'Pourquoi nous choisir ?' },
    { id: '#nos-domaines', label: 'Nos domaines' },
    { id: '#nos-valeurs', label: 'Nos valeurs' },
    { id: '#notre-equipe', label: 'Notre équipe' },
  ];

  // Fonction pour détecter la section active pendant le défilement
  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2; // Prendre la moitié de la hauteur de la fenêtre
    navLinks.forEach((link) => {
      const section = document.querySelector(link.id);
      if (section) {
        if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          setActiveSection(link.id);
        }
      }
    });
  };
  
  // Ajouter un écouteur d'événement pour le scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Nettoyage de l'écouteur
  }, []);

  return (
    <div>
      {/* Section avec l'image de fond */}
      <div id="qui-nous-sommes" className="hero-about">
        <div className="hero-text">
          <h1>À propos</h1>
        </div>
      </div>

      {/* Barre de navigation sous la photo */}
      <div className="info-bar">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.id}
            className={`info-link ${activeSection === link.id ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick(link.id); // Déclenche le changement de section et le scroll
            }}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Contenu principal */}
      <div className="container">
        <div id="apropos">
          <Apropos/>
        </div>
        <div id="nos-domaines">
          <Services />
        </div>
        <div id="nos-valeurs">
          <Nosvaleurs />
        </div>
        <div id="pourquoi-choisir">
          <PointsForts />
        </div>
        <div id="notre-equipe">
          <TeamSection />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
