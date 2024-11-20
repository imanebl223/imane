import React from 'react';
import './Title8.css';

const Title8 = ({ subTitle, title }) => {
  return (
    <div className="title-container">
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </div>
  );
}

export default Title8;
