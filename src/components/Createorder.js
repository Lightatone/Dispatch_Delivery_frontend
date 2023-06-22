import React, { useState } from 'react';
import PhoneInput from "antd-phone-input/legacy";
import "./Createorder.css";
import { 
    Button,
    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
    TreeSelect,
    Steps
   } from 'antd';
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
/* eslint-enable no-template-curly-in-string */

const validator = (_, {valid}) => {
    if (valid) {
      return Promise.resolve();
    }
    return Promise.reject("Invalid phone number");
  }
function Createorder(){
    const [form] = Form.useForm();
    const [current,setCurrent] = useState(0);
    const [userInfo,setUserInfo] = useState(null); 
    const [reciverInfo,setReciverInfo] = useState(null); 
    const [planinfo,setPlanInfo] = useState(null); 
    const onFinshUserform = (values)=>{
        setUserInfo(values);
        setCurrent(1);
    }
    const onFinshDestinationform = (values)=>{
        setReciverInfo(values);
        setCurrent(2);
    }
    const onFinshPlanform = (values)=>{
        setPlanInfo(values);
        setCurrent(3);
    }
    const forms = [
        <UserinfoForm onFinish={onFinshUserform} initialValues={userInfo} />,
        <DestinationForm onFinish={onFinshDestinationform}  initialValues={reciverInfo}/>,
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
            return reciverInfo === null || userInfo === null || planinfo === null
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
                disabled: 'isStepdisable(0)',
                title: 'fill your info'},
                { 
                disabled:'isStepdisable(1)', 
                title: 'fill destination'},
                { 
                disabled: 'isStepdisable(3)',
                title: 'Choose your plan'},
                {
                disabled: 'isStepdisable(4)',
                title: '{Pay}'},
            ]}
            />
            {forms[current]}
        </>
        
        
    )
}

function UserinfoForm({onFinish, initialValues}){
    return(
        <Form {...layout} name="nest-messages" 
        onFinish={onFinish} 
        style={{ maxWidth: 600}} 
        validateMessages={validateMessages}
        initialValues={initialValues}>
                    <Form.Item
                        name={['user', 'name']}
                        label="Name"
                        rules={[
                            {
                            required: true,
                            },]}
                    >
                        <Input placeholder="Full Name" />
                    </Form.Item>
                    <Form.Item
                        name={['user', 'phone']}
                        label="Contact Phone Number"
                        rules={[
                            {
                            required: true, validator
                            },]}
                    >
                        <PhoneInput enableSearch/>
                    </Form.Item>
                    
                    <Form.Item
                        name={['user', 'Email']}
                        label="Email"
                        rules={[
                            {
                            type: 'email',
                            
                            },]}
                    >
                        <Input placeholder="Email address" />
                    </Form.Item>
                    <Form.Item
                        name={['user', 'Address']}
                        label="Address"
                        rules={[
                            {
                            type: 'string',
                            required: true,
                            },]}
                    >
                        <Input placeholder="Address" />
                    </Form.Item>
                    <Form.Item
                        name={['user', 'City']}
                        label="City"
                        rules={[
                            {
                            type: 'string',
                            required: true,
                            },]}
                    >
                        <Input placeholder="City" />
                    </Form.Item>
                    <Form.Item
                        name={['user', 'State']}
                        label="State"
                        rules={[
                            {
                            type: 'string',
                            required: true,
                            },]}
                    >
                        <Input placeholder="State" />
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            ...layout.wrapperCol,
                            offset: 8,
                        }}
                    >
                    <Button type="primary" htmlType="submit">
                        Continue
                    </Button>
                    </Form.Item>
                </Form>
    )
}

function DestinationForm({onFinish, initialValues}){
    return(
        <Form {...layout} name="nest-messages" 
        onFinish={onFinish} 
        style={{ maxWidth: 600}} 
        validateMessages={validateMessages}
        initialValues={initialValues}>
                    <Form.Item
                        name={['destination', 'name']}
                        label="Reciver's Name"
                        rules={[
                            {
                            required: true,
                            },]}
                    >
                        <Input placeholder="Full Name" />
                    </Form.Item>
                    <Form.Item
                        name={['destination', 'phone']}
                        label="Reciver's Phone Number"
                        rules={[
                            {
                            required: true, validator
                            },]}
                    >
                        <PhoneInput enableSearch/>
                    </Form.Item>
                    
                    <Form.Item
                        name={['destination', 'Email']}
                        label="Reciver's Email"
                        rules={[
                            {
                            type: 'email',
                            
                            },]}
                    >
                        <Input placeholder="Email address" />
                    </Form.Item>
                    <Form.Item
                        name={['destination', 'Address']}
                        label="Reciver's Address"
                        rules={[
                            {
                            type: 'string',
                            required: true,
                            },]}
                    >
                        <Input placeholder="Address" />
                    </Form.Item>
                    <Form.Item
                        name={['destination', 'City']}
                        label="Reciver's City"
                        rules={[
                            {
                            type: 'string',
                            required: true,
                            },]}
                    >
                        <Input placeholder="City" />
                    </Form.Item>
                    <Form.Item
                        name={['destination', 'State']}
                        label="Reciver's State"
                        rules={[
                            {
                            type: 'string',
                            required: true,
                            },]}
                    >
                        <Input placeholder="State" />
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            ...layout.wrapperCol,
                            offset: 8,
                        }}
                    >
                    <Button type="primary" htmlType="submit">
                        Continue
                    </Button>
                    </Form.Item>
                </Form>
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