import React, { useState } from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import im1 from '../../assets/im1.jpg';
import im2 from '../../assets/im2.jpg';
import im3 from '../../assets/im3.jpg';
import im4 from '../../assets/im4.jpg';
import im5 from '../../assets/im5.jpg';
import im6 from '../../assets/im6.jpg';

const galleryImages = [im1, im2, im3, im4, im5, im6];

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Fonction pour ouvrir le modal
  const openModal = (index) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  // Fonction pour fermer le modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedIndex(null);
  };

  // Défilement vers l'image précédente
  const showPreviousImage = (e) => {
    e.stopPropagation(); // Empêche de fermer le modal en cliquant sur la flèche
    setSelectedIndex((prevIndex) => (prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1));
  };

  // Défilement vers l'image suivante
  const showNextImage = (e) => {
    e.stopPropagation(); // Empêche de fermer le modal en cliquant sur la flèche
    setSelectedIndex((prevIndex) => (prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Branding and Description */}
        <div className="footer-section footer-branding">
          <img src={logo} alt="Logo SOLU-PERFORMANCE" className="footer-logo" />
          <p>
            SOLU-PERFORMANCE, votre partenaire stratégique pour des solutions adaptées en conseil, formation et recrutement.
          </p>
          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="footer-section footer-expertise">
  <h3>Expertise</h3>
  <ul>
    <li><a href="/services#formation-continue">Formation continue</a></li>
    <li><a href="/services#accompagnement-consulting">Accompagnement - Consulting</a></li>
    <li><a href="/services#ingenierie-formation">Ingénierie de formation</a></li>
    <li><a href="/services#recrutement">Recrutement</a></li>
  </ul>
</div>


        {/* Contact Information */}
        <div className="footer-section footer-contact">
          <h3>Contactez-nous</h3>
          <p><FaEnvelope /> rh@solu-performance.ma</p>
          <p><FaPhone /> +212 660 477 528 / +212 627 642 244</p>
          <p><FaMapMarkerAlt /> Av Moulay Rachid, Rés ADAM, trémie Mesnana<br />
            4ème étage N° 13, Tanger
          </p>
        </div>

        {/* Gallery */}
        <div className="footer-section footer-gallery">
          <h3>Notre Galerie</h3>
          <div className="gallery">
            {galleryImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Galerie ${index + 1}`}
                onClick={() => openModal(index)} // Ouvre le modal en cliquant sur l'image
                className="gallery-image"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Enlarged Image */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <button className="arrow left-arrow" onClick={showPreviousImage}>
              <FaChevronLeft />
            </button>
            <img src={galleryImages[selectedIndex]} alt="Image agrandie" />
            <button className="arrow right-arrow" onClick={showNextImage}>
              <FaChevronRight />
            </button>
            <button onClick={closeModal} className="close-btn">Fermer</button>
          </div>
        </div>
      )}

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} <a href="https://soluperformance.ma">soluperformance.ma</a>. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
