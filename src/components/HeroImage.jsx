import React from 'react';

const HeroImage = ({ src, alt }) => {
  return (
    <div className="hero-image">
      <img 
        src={src} 
        alt={alt} 
        className="hero-image__img"
        loading="lazy"
      />
    </div>
  );
};

export default HeroImage;
