import React, { useState } from 'react';
import Card from './Card';
import './TemplateCard.css'    
const TemplateCard = ({ cardList }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardSelect = (card) => {
    setSelectedCard(card);
  };

  return (
    <div className="card-list">
      {cardList.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          type={card.type}
          price={card.price}
          image={card.image}
          onSelect={() => handleCardSelect(card)}
        />
      ))}
      {selectedCard && (
        <div>
          <h3>Selected Card:</h3>
          <p>{selectedCard.title}</p>
        </div>
      )}
    </div>
  );
};

export default TemplateCard;