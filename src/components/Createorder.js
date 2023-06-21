import React from 'react';
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
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
console.log(values);
};
function Createorder(){
    const [form] = Form.useForm();
    return(
        <body>
            <section class="corder-container">
                <div class="left-half">
                <div class ='labelName' >Your Pick up info</div>
                <Form {...layout} name="nest-messages" onFinish={onFinish} style={{ maxWidth: 600}} validateMessages={validateMessages}>
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
                            required: true,
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
                        Submit
                    </Button>
                    </Form.Item>
                </Form>
                </div>
                <div class="right-half">
                    
                    <p>If your knees aren't green by the end of the day, you ought to seriously re-examine your life.</p>
                    
                </div>
            </section>
        </body>
    )
}

export default Createorder;