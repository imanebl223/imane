import React from 'react';
import './ContactPage.css';
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import ContactBar from '../ContactBar/ContactBar';
import buildingimage from '../../assets/location.png'; // Corrected image import

const ContactPage = () => {
  return (
    <div className="contact-page">
      {/* Section Hero */}
      <div className="hero-about">
        <div className="hero-text">
          <h1>Contactez-nous</h1>
        </div>
      </div>

      {/* Barre de contact */}
      <ContactBar />

      {/* Section des informations de contact avec un fond gris et séparateurs */}
      <div className="contact-info-section">
        <div className="contact-item">
          <div className="icon">
            <FaPhone />
          </div>
          <div className="contact-text">
            <h3>Numéro De Téléphone</h3>
            <p>0660 477 528 / 0627 642 244</p>
          </div>
        </div>

        <div className="divider"></div> {/* Ligne de séparation */}

        <div className="contact-item">
          <div className="icon">
            <FaMapMarkerAlt />
          </div>
          <div className="contact-text">
            <h3>Adresse</h3>
            <p>Av Moulay Rachid, Rés ADAM, trémie Mesnana</p>
            <p>4 ème étage N° 13, Tanger</p>
          </div>
        </div>

        <div className="divider"></div> {/* Ligne de séparation */}

        <div className="contact-item">
          <div className="icon">
            <FaEnvelope />
          </div>
          <div className="contact-text">
            <h3>E-Mail</h3>
            <p>rh@solu-performance.ma</p>
          </div>
        </div>
      </div>
      <div className="location-section">
  {/* Carte Google à gauche */}
  <div className="google-maps">
    <iframe 
      src="https://maps.google.com/maps?q=Av%20Moulay%20Rachid,%20R%C3%A9s%20ADAM,%20tr%C3%A9mie%20Mesnana%204%20%C3%A8me%20%C3%A9tage%20N%C2%B0%2013,%20Tanger&t=&z=13&ie=UTF8&iwloc=&output=embed"
      width="100%" 
      height="100%" 
      style={{border: 0, borderRadius: '8px'}}
      allowFullScreen=""
      loading="lazy"
    ></iframe>
  </div>

  {/* Image du bâtiment à droite */}
  <div className="location-image">
    <img 
      src={buildingimage}  
      alt="Bâtiment" 
      className="building-image" 
    />
  </div>
</div>



    </div>
  );
};

export default ContactPage;
