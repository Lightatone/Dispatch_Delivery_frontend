import React,{useState} from "react";
import TemplateCard from "../Card/TemplateCard";
import { Button} from 'antd';
// import drone from '../assets/drone.png';


//src\components\form\ChoosePlanForm.js
//src\assets\drone.png
function ChoosePlanForm({onFinish,initialValues}) {
    const [selectedCard, setSelectedCard] = useState(null); // 添加状态来存储选择的卡片
    const handleCardSelect = (card) => {
        setSelectedCard(card);
    
        // 发送选择的卡片信息到后端
        // 可以在此处编写代码将 selectedCard 发送到后端
        // 例如使用 fetch 或 axios 发送 POST 请求
        // fetch('/api/select-card', {
        //   method: 'POST',
        //   body: JSON.stringify(selectedCard),
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        // })
        //   .then(response => response.json())
        //   .then(data => {
        //     // 处理后端的响应数据
        //   })
        //   .catch(error => {
        //     // 处理错误
        //   });
      };
    // fake data
    const cardList = [
        { id: 1, title: 'Plan 1', type: 'Robot', price: '$10', image: process.env.PUBLIC_URL +'/images/robot.png' },
        { id: 2, title: 'Plan 2', type: 'Human', price: '$20', image: process.env.PUBLIC_URL +'/images/human.jpg' },
        { id: 3, title: 'Plan 3', type: 'Drone', price: '$30', image: process.env.PUBLIC_URL + '/images/drone.png' },
      ];
    return(
        <div>
            <h1>Hi Here is TemplateCard</h1>
            <TemplateCard cardList={cardList} onCardSelect={handleCardSelect} /> 
        
            {selectedCard && (
                <div>
                <h3>Selected Card:</h3>
                <p>{selectedCard.title}</p>
                </div>
            )}
            <Button type="primary" htmlType="submit" onClick={onFinish} >
                Continue
            </Button>
        </div>
    )
}

export default ChoosePlanForm;