import React from 'react';
import './Title7.css';

const Title7 = ({ subTitle, title }) => {
  return (
    <div className="title-container">
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </div>
  );
}

export default Title7;
