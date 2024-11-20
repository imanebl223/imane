import React from 'react';
import './Hero.css';

const Hero = ({ title, subtitle }) => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1 className='hero-title'>{title}</h1> {/* Utilisez la classe hero-title ici */}
        <h3 className='hero-subtitle'>{subtitle}</h3>
        <p className="hero-strong-text">
    <strong>Faites décoller votre business et améliorez votre chiffre d'affaires.</strong>
</p>

        <p>
          Chez Solu-Performance, nous vous accompagnons vers la réussite en mettant l'accent sur le développement de stratégies efficaces et la mise en œuvre de solutions adaptées à vos besoins.
        </p>
        <button className='btn'>En savoir plus</button>
      </div>
    </div>
  );
};

export default Hero;
