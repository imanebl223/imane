import React, { useState } from 'react';
import './Témoignages.css';

const reviews = [
  {
    name: "Chaimaa Aghmir",
   
    review: "Ce qui distingue vraiment Solu-performance, c'est sa capacité à me motiver et à me pousser hors de ma zone de confort. Il m'a encouragé à relever des défis ambitieux, à prendre des initiatives et à repousser mes limites. Grâce à ses encouragements constants et à son soutien inconditionnel, j'ai gagné en confiance et j'ai pu réaliser des performances exceptionnelles. Je le recommande vivement !",
    stars: 5,
  },
  {
    name: "Ali Sekkouri",
  
    review: "Abdelhadi est un homme dévoué et déterminé à relever les défis que ses clients peuvent lui confier ! Je le recommande vivement pour toute société désirant former et faire évoluer sa force de vente.",
    stars: 5,
  },
  {
    name: "Ahmed Belachhab",

    review: "Un impact positif sur nos équipes et nos chiffres. Une collaboration exceptionnelle avec Solu-performance.",
    stars: 5,
  },
  {
    name: "Oumaima Ez-zibouh",

    review: "Les équipes commerciales ont acquis de nouvelles compétences grâce à ce cabinet, et les résultats sont stupéfiants.",
    stars: 5,
  },
  {
    name: "Youssef Bennani",
   
    review: "Excellente expérience avec votre équipe de travail. Très professionnel. Bravo!",
    stars: 5,
  },
  {
    name: "Chaimaa Badrour",  // Nouveau témoignage
  
    review: "Le cabinet nous a apporté une réelle valeur ajoutée. Leur accompagnement est tout simplement impressionnant.",
    stars: 5,
  }
];

const Stars = ({ count }) => (
  <div className="stars">
    {'★'.repeat(count)}
    {'☆'.repeat(5 - count)}
  </div>
);

const Témoignages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 3 : prevIndex - 3
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 3 ? 0 : prevIndex + 3
    );
  };

  return (
    <div className="témoignages-container">
      <div
        className="prev"
        onClick={handlePrev} // Remplacez onMouseEnter par onClick
      >
        {"<"}
      </div>
      <div className="témoignages-list">
        {reviews.slice(currentIndex, currentIndex + 3).map((review, index) => (
          <div key={index} className="témoignage-card">
            <h3 className="témoignage-name">{review.name}</h3>
            <Stars count={review.stars} />
            <p className="témoignage-date">{review.date}</p>
            <p className="témoignage-text">{review.review}</p>
          </div>
        ))}
      </div>
      <div
        className="next"
        onClick={handleNext} // Remplacez onMouseEnter par onClick
      >
        {">"}
      </div>
    </div>
  );
};

export default Témoignages;
