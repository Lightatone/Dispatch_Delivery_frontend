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
function UserinfoForm({onFinish, initialValues}){
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
                        name={['user', 'Name']}
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
export default UserinfoForm;