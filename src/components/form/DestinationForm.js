import React from 'react';
import PhoneInput from "antd-phone-input/legacy";
import { 
    Button,
    Form,
    Input,
   } from 'antd';
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

const validator = (_, {valid}) => {
    if (valid) {
      return Promise.resolve();
    }
    return Promise.reject("Invalid phone number");
}
function DestinationForm({onFinish, initialValues}){
    return(
        <Form {...layout} name="nest-messages" 
        onFinish={onFinish} 
        style={{ maxWidth: 600}} 
        validateMessages={validateMessages}
        initialValues={initialValues}
        labelCol={{
            span: 400
        }}
        wrapperCol={{
            span: 200
        }}>
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

export default DestinationForm;