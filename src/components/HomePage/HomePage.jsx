import React from 'react';
import Hero from "../components/Navbar/Hero/Hero";
import Programs from "../components/Programs/Programs";
import Title from "../components/Title/Title";
import Title2 from "../components/Title2/Title2";
import Apropos from "../components/Apropos/Apropos"; // Assurez-vous d'importer Apropos
import Title3 from "../components/Title3/Title3";
import Services from "../components/Services/Services";
import Title4 from "../components/Title4/Title4";
import Expertise from "../components/Expertise/Expertise";
import PointsForts from "../components/PointsForts/PointsForts";
import Nosvaleurs from "../components/Nosvaleurs/Nosvaleurs";
import Clients from "../components/Clients/Clients";
import Title5 from "../components/Title5/Title5";
import Title6 from "../components/Title6/Title6";
import Témoignages from "../components/Témoignages/Témoignages";
import Title7 from "../components/Title7/Title7";
import ContactBar from "../components/ContactBar/ContactBar";
import Title8 from "../components/Title8/Title8";


const HomePage = () => {
  return (
    <div>
      <Hero />
      <div className="container">
        <Title subTitle="Nos Solutions" title="Explorez nos solutions sur mesure !" />
        <Programs />

        {/* Section À propos */}
        <div id="a-propos">
          <Title2 subTitle="À propos" title="Qui sommes-nous ?" />
          <Apropos />
        </div>

        {/* Section Nos Domaines */}
        <div id="nos-domaines">
          <Title3 subTitle="Nos Domaines" title="Découvrez nos domaines !" />
          <Services />
        </div>

        {/* Section Expertise */}
        <div id="notre-expertise">
          <Title4 subTitle="Notre expertise" title="Explorez l'expertise qui vous propulse !" />
          <Expertise />
        </div>

        {/* Section Points Forts */}
        <div id="pourquoi-choisir">
          <Title6 subTitle="Nos points forts" title="Pourquoi nous choisir ?" />
          <PointsForts />
        </div>
     
        {/* Section Nos Valeurs */}
        <div id="nos-valeurs">
          <Nosvaleurs />
        </div>

        {/* Section Témoignages */}
        <div id="temoignages">
          <Title7 subTitle="Témoignages" title="Leur satisfaction est notre fierté!" />
          <Témoignages />
        </div>

        {/* Section Clients */}
        <div id="clients">
          <Title5 subTitle="NOS RÉFÉRENCES" />
          <Clients />
        </div>

        {/* Section Contact */}
        <div id="contact">
          <Title8 subTitle="CONTACTEZ NOUS" title="N'hésitez pas à nous contacter !" />
          <ContactBar />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
