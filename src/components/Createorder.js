import React, { useState } from 'react';
import "./Createorder.css";
import UserinfoForm from "./form/UserinfoForm"
import DestinationForm from './form/DestinationForm';
import PackageForm from './form/PackageForm';
// PackageForm.js
import { 
    Button,
    
    Steps
   } from 'antd';




function Createorder(){
    // const [form] = Form.useForm();
    const [current,setCurrent] = useState(0);
    const [userInfo,setUserInfo] = useState(null); 
    const [reciverInfo,setReciverInfo] = useState(null); 
    const [packageinfo,setpackageInfo] = useState(null); 
    const [planinfo,setPlanInfo] = useState(null); 
    const onFinshUserform = (values)=>{
        setUserInfo(values);
        setCurrent(1);
        console.log("user info form", values);
        // return obejcet-User include: Address, City, Email, Name, State, and phone (object)
        // phone obeject -> areaCode, countryCode, isoCode,phone number, vaild 
        // phonenumber = coutryCode (+1) + areaCode (626) + phone number (123 4567), isoCode is show the countryCode (like us)
    }
    const onFinshDestinationform = (values)=>{
        setReciverInfo(values);
        setCurrent(2);
    }
    const onFinshPackageform = (values)=>{
        setpackageInfo(values);
        setCurrent(3);
        console.log('Received values from form: ', values);
    }
    const onFinshPlanform = (values)=>{
        setPlanInfo(values);
        setCurrent(4);
    }
    const forms = [
        <UserinfoForm onFinish={onFinshUserform} initialValues={userInfo} />,
        <DestinationForm onFinish={onFinshDestinationform}  initialValues={reciverInfo}/>,
        <PackageForm onFinish={onFinshPackageform}  initialValues={packageinfo} />,
        <ChoosePlan onFinish={onFinshPlanform} initialValues={planinfo}/>,
        <Payment/>,
    ]
    const isStepdisable=(stepNumber)=>{
        if(stepNumber===0){
            return false
        }
        if(stepNumber===1){
            return userInfo === null
        }
        if(stepNumber===2){
            return reciverInfo === null || userInfo === null
        }

        if(stepNumber===3){
            return reciverInfo === null || userInfo === null || packageinfo === null
        }

        if(stepNumber===4){
            return reciverInfo === null || userInfo === null || packageinfo === null || planinfo === null
        }
    }
    
    return(
        <>
            <Steps 
            style={{padding: "32px 16px"}} 
            onChange={setCurrent} 
            current={current}
            items={[
                {
                disabled: isStepdisable(0),
                title: 'fill your info'},
                { 
                disabled:isStepdisable(1), 
                title: 'fill destination'},
                { 
                disabled:isStepdisable(2), 
                title: 'fill Package info'},
                { 
                disabled: isStepdisable(3),
                title: 'Choose your plan'},
                {
                disabled: isStepdisable(4),
                title: '{Pay}'},
            ]}
            />
            {forms[current]}
        </>
        
        
    )
}


function ChoosePlan({onFinish,initialValues}){
    
    return(
        <div>
            
            <Button type="primary" htmlType="submit" onClick={onFinish} initialValues={initialValues}>
                Continue
            </Button>
        </div>
    )
}
function Payment(){
    return(
        <Button type="primary" htmlType="submit">
            Pay
        </Button>
    )
}


export default Createorder;