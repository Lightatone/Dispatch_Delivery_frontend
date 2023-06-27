import React,{ useEffect }  from "react";
import Card from "../Card/Card";
import { Button} from 'antd';
import './ChoosePlanForm.css';

//src\components\form\ChoosePlanForm.js
//src\assets\drone.png
function ChoosePlanForm({onFinish,selectedCard,onCardSelect}) {
    const handleCardSelect = (card) => {
        onCardSelect(card);
      };
    // fake data
    const cardList = [
        { id: 1, title: 'Plan 1', type: 'Robot', price: '$10', image: process.env.PUBLIC_URL +'/images/robot.png' },
        { id: 2, title: 'Plan 2', type: 'Human', price: '$20', image: process.env.PUBLIC_URL +'/images/human.jpg' },
        { id: 3, title: 'Plan 3', type: 'Drone', price: '$30', image: process.env.PUBLIC_URL + '/images/drone.png' },
      ];
    useEffect(() => {
    // Set the default selected card
        if (!selectedCard && cardList.length > 0) {
            handleCardSelect(cardList[0]);
        }
    }, []);
    return(
        <div > 
            <h1>Hi Here is TemplateCard</h1>
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
                <div className="cardselection">
                    {selectedCard && (
                        <div>
                        <h3>Selected Plan for Delivery:</h3>
                        <p>{selectedCard.title}</p>
                        <p>{selectedCard.price}</p>
                        </div>
                    )}
                </div>
                
            </div>
            <Button className="Planbutton" type="primary" htmlType="submit" onClick={() => onFinish(selectedCard)}  >
                Continue
            </Button>
        </div>
    )
}

export default ChoosePlanForm;