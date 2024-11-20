import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Navbar/Hero/Hero";
import Title3 from "./components/Title3/Title3";
import Services from "./components/Services/Services";
import Methodologie from "./components/Methodologie/Methodologie";
import Title4 from "./components/Title4/Title4";
import Expertise from "./components/Expertise/Expertise";
import PointsForts from "./components/PointsForts/PointsForts";
import Clients from "./components/Clients/Clients";
import Title5 from "./components/Title5/Title5";
import Title6 from "./components/Title6/Title6";
import Témoignages from "./components/Témoignages/Témoignages";
import Title7 from "./components/Title7/Title7";
import ContactBar from "./components/ContactBar/ContactBar";
import Title8 from "./components/Title8/Title8";
import Footer from "./components/Footer/Footer";
import AboutPage from "./components/AboutPage/AboutPage";
import ServicesPage from "./components/Servicespage/Servicespage";
import ContactPage from "./components/Contactpage/Contactpage"; // Importation de la nouvelle page
import ImpactFormation from "./components/ImpactFormation/ImpactFormation";

const App = () => {
  const [activePage, setActivePage] = useState("home");

  const handleNavClick = (page) => {
    setActivePage(page);
  };

  return (
    <div>
      <Navbar onNavClick={handleNavClick} />
      
      {activePage === "home" && (
        <>
          <Hero />
          <div className="container">
            <Title3 subTitle="Nos Domaines" title="Découvrez nos domaines !" />
            <Services />
            <Title4 subTitle="Notre expertise" title="Explorez l'expertise qui vous propulse !" />
            <Expertise />
            <Title6 subTitle="Nos points forts" title="Pourquoi nous choisir ?" />
            <PointsForts />
            <ImpactFormation/>  
            <Methodologie />
            <Title7 subTitle="Témoignages" title="Leur satisfaction est notre fierté!" />
            <Témoignages />
          

            <Title5 subTitle="NOS RÉFÉRENCES" />
            <Clients />
            <Title8 subTitle="CONTACTEZ NOUS" title="N'hésitez pas à nous contacter !" />
            <ContactBar />
          </div>
        </>
      )}

      {activePage === "about" && <AboutPage />}
      {activePage === "services" && <ServicesPage />}
      {activePage === "contact" && <ContactPage />} {/* Ajout de ContactPage */}
      
      <Footer />
    </div>
  );
};

export default App;
