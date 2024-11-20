import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = ({ onNavClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);  // Ajoutez ceci pour tester si le scroll est bien détecté
      setIsScrolled(window.scrollY > 50); // Applique la classe 'scrolled' si le défilement dépasse 50px
    };

    // Ajoutez un écouteur pour l'événement de défilement
    window.addEventListener('scroll', handleScroll);
    
    // Nettoyez l'écouteur de l'événement lors du démontage du composant
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Le tableau vide [] signifie que cet effet se lance une seule fois au montage

  return (
    <nav className={` ${isScrolled ? 'scrolled' : ''}`} role="navigation"> {/* La classe 'scrolled' s'ajoute si isScrolled est true */}
      <img src={logo} alt="Logo" className="logo" />
      <ul>
        <li onClick={() => onNavClick("home")}>Accueil</li>
        <li>
          <a className="button-like" onClick={() => onNavClick("about")}>À propos</a>
        </li>
        <li onClick={() => onNavClick("services")}>Services</li>
        <li onClick={() => onNavClick("contact")}>
          <button type="button" className="btn">Contact</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
