import React from 'react';
import './Card.css'
const Card = ({ title, type, price, image, onSelect,isSelected  }) => {
  

    return (
        <div className={`cardstyle ${isSelected ? 'selected' : ''}`}>
          <img className="card-image" src={image} alt={title} />
          <div className="card-details">
            <h3>{title}</h3>
            <p>Type: {type}</p>
            <p>Price: {price}</p>
            <button onClick={onSelect}>Select</button>
          </div>
        </div>
    );
};

export default Card;