import React, { useState } from "react";
import "./Createorder.css";
import UserinfoForm from "./form/UserinfoForm";
import DestinationForm from "./form/DestinationForm";
import PackageForm from "./form/PackageForm";
import ChoosePlanForm from "./form/ChoosePlanForm";
import PaymentForm from "./form/PaymentForm";
import { Steps } from "antd";

function Createorder() {
  const [current, setCurrent] = useState(0);
  const [userInfo, setUserInfo] = useState(null);
  const [reciverInfo, setReciverInfo] = useState(null);
  const [packageinfo, setpackageInfo] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const onFinshUserform = (values) => {
    setUserInfo(values);
    setCurrent(1);
    console.log("user info form", values);
    // return obejcet-User include: Address, City, Email, Name, State, and phone (object)
    // phone obeject -> areaCode, countryCode, isoCode,phone number, vaild
    // phonenumber = coutryCode (+1) + areaCode (626) + phone number (123 4567), isoCode is show the countryCode (like us)
    
    //Communicate with Java backend to send user information ++++++++++++++++++++WAIT FOR BACKEND+++++++++
    /*
    fetch("/api/user-info", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.json())
    .then((data) => {
    // Process the response from the backend
    setUserInfo(values);
    setCurrent(1);
    console.log("user info form", values);
    })
    .catch((error) => {
    // Handle errors
    });*/
  };
  const onFinshDestinationform = (values) => {
    setReciverInfo(values);
    setCurrent(2);
    console.log("Receiver values from form: ", values);
    /*
        // Communicate with Java backend to send destination information
    fetch('/api/destination-info', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Process the response from the backend
        setReciverInfo(values);
        setCurrent(2);
        console.log('Receiver values from form: ', values);
      })
      .catch((error) => {
        // Handle errors
      });

    */
  };
  const onFinshPackageform = (values) => {
    setpackageInfo(values);
    setCurrent(3);
    console.log("Package values from form: ", values);
    /*
    fetch('/api/package-info', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Process the response from the backend
        setPackageInfo(values);
        setCurrent(3);
        console.log('Package values from form: ', values);
      })
      .catch((error) => {
        // Handle errors
      });
    */
  };
  const onFinshPlanform = (values) => {
    setCurrent(4);
    setSelectedCard(selectedCard);
    const finalplan = cardList.find(card => card.id === values);
    console.log("Plan info from Card: ", finalplan);
    /*
    fetch('/api/plan-info', {
      method: 'POST',
      body: JSON.stringify(finalplan),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Process the response from the backend
        setCurrent(4);
        setSelectedCard(finalplan);
        console.log('Plan info from Card: ', finalplan);
      })
      .catch((error) => {
        // Handle errors
      });
    */
  };
  // fake data
  const cardList = [
    { id: 1, title: 'Plan 1', type: 'Robot', price: '$10', image: process.env.PUBLIC_URL +'/images/robot.png' },
    { id: 2, title: 'Plan 2', type: 'Human', price: '$20', image: process.env.PUBLIC_URL +'/images/human.jpg' },
    { id: 3, title: 'Plan 3', type: 'Drone', price: '$30', image: process.env.PUBLIC_URL + '/images/drone.png' },
  ];
  const forms = [
    <UserinfoForm onFinish={onFinshUserform} initialValues={userInfo} />,
    <DestinationForm
      onFinish={onFinshDestinationform}
      initialValues={reciverInfo}
    />,
    <PackageForm onFinish={onFinshPackageform} initialValues={packageinfo} />,
    <ChoosePlanForm
      onFinish={onFinshPlanform}
      selectedCard={selectedCard}
      onCardSelect={setSelectedCard}
      cardList={cardList}
    />,
    <PaymentForm />,
  ];

  const isStepdisable = (stepNumber) => {
    if (stepNumber === 0) {
      return false;
    }
    if (stepNumber === 1) {
      return userInfo === null;
    }
    if (stepNumber === 2) {
      return reciverInfo === null || userInfo === null;
    }

    if (stepNumber === 3) {
      return reciverInfo === null || userInfo === null || packageinfo === null;
    }

    if (stepNumber === 4) {
      return (
        reciverInfo === null ||
        userInfo === null ||
        packageinfo === null ||
        selectedCard === null
      );
    }
  };

  return (
    <>
      <Steps
        style={{ padding: "32px 16px" }}
        onChange={setCurrent}
        current={current}
        items={[
          {
            disabled: isStepdisable(0),
            title: "fill your info",
          },
          {
            disabled: isStepdisable(1),
            title: "fill destination",
          },
          {
            disabled: isStepdisable(2),
            title: "fill Package info",
          },
          {
            disabled: isStepdisable(3),
            title: "Choose your plan",
          },
          {
            disabled: isStepdisable(4),
            title: "Pay",
          },
        ]}
      />
      {forms[current]}
    </>
  );
}

export default Createorder;
