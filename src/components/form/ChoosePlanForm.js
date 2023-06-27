import React,{ useEffect }  from "react";
import Card from "../Card/Card";
import { Button} from 'antd';
import './ChoosePlanForm.css';

//src\components\form\ChoosePlanForm.js
//src\assets\drone.png
function ChoosePlanForm({onFinish,selectedCard,onCardSelect,cardList}) {
    const handleCardSelect = (card) => {
        onCardSelect(card.id);
      };
    
    useEffect(() => {
    // Set the default selected card
        if (!selectedCard && cardList.length > 0) {
            handleCardSelect(cardList[0]);
        }
    }, []);
    return(
        <div > 
            <div className="card-list">
                {cardList.map((card) => (
                    <Card
                    key={card.id}
                    title={card.title}
                    type={card.type}
                    price={card.price}
                    image={card.image}
                    onSelect={() => handleCardSelect(card)}
                    isSelected={selectedCard === card.id}
                    />
                ))}
                <div className="cardselection">
                    {selectedCard && (
                        <div>
                            <h3>Selected Plan for Delivery:</h3>
                            <p>{cardList.find(card => card.id === selectedCard).title}</p>
                            <p>{cardList.find(card => card.id === selectedCard).price}</p>
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