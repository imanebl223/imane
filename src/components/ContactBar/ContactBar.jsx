import React, { useState } from 'react';
import './ContactBar.css';

const ContactBar = () => {
  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Envoi en cours...");

    const formData = new FormData(event.target);
    formData.append("access_key", "d190f09c-c88c-4bdd-ad44-1410713e81c2");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Formulaire envoyé avec succès");
        event.target.reset();
      } else {
        console.error("Erreur", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi", error);
      setResult("Une erreur s'est produite. Veuillez réessayer.");
    }
  };

  return (
    <div className="contact-section">
      <div className="contact-wrapper">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input 
              type="text" 
              name="nom" 
              placeholder="Nom complet" 
              className="input-field" 
              required
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              className="input-field" 
              required
            />
          </div>
          <div className="form-group">
            <input 
              type="tel" 
              name="telephone" 
              placeholder="Numéro de téléphone" 
              className="input-field" 
              required
            />
          </div>
          <div className="form-group">
            <textarea 
              name="message" 
              placeholder="Votre message" 
              className="input-textarea" 
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Envoyer Message</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default ContactBar;
