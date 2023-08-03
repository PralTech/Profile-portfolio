import React from 'react';
import './ClientCard.css';

const ClientCard = ({ image, name, designation, review }) => {
  return (
    <div className="client-card">
      <img src={image} alt={name} className="client-image" />
      <div className="client-details">
        <h3 className="client-name">{name}</h3>
        <p className="client-designation">{designation}</p>
        <p className="client-review">{review}</p>
      </div>
    </div>
  );
};

export default ClientCard;
