import React, {useState} from 'react';
import { 
    Button,
    Form,
    Input,
    Select
   } from 'antd';
const { TextArea } = Input;
const { Option } = Select;
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};


const WeightInput = ({ value = {}, onChange }) => {
    const [number, setNumber] = useState(0);
    const [currency, setCurrency] = useState('Kg');
    const triggerChange = (changedValue) => {
      onChange?.({
        number,
        currency,
        ...value,
        ...changedValue,
      });
    };
    const onNumberChange = (e) => {
      const newNumber = parseInt(e.target.value || '0', 10);
      if (Number.isNaN(number)) {
        return;
      }
      if (!('number' in value)) {
        setNumber(newNumber);
      }
      triggerChange({
        number: newNumber,
      });
    };
    const onCurrencyChange = (newCurrency) => {
      if (!('currency' in value)) {
        setCurrency(newCurrency);
      }
      triggerChange({
        currency: newCurrency,
      });
    };
    return (
      <span>
        <Input
          type="text"
          value={value.number || number}
          onChange={onNumberChange}
          style={{
            width: 100,
          }}
        />
        <Select
          value={value.currency || currency}
          style={{
            width: 80,
            margin: '0 8px',
          }}
          onChange={onCurrencyChange}
        >
          <Option value="kg">kg</Option>
          <Option value="lb">lb</Option>
        </Select>
      </span>
    );
  };

const LengthInput = ({ value = {}, onChange }) => {
    const [number, setNumber] = useState(0);
    const [currency, setCurrency] = useState('cm');
    const triggerChange = (changedValue) => {
      onChange?.({
        number,
        currency,
        ...value,
        ...changedValue,
      });
    };
    const onNumberChange = (e) => {
      const newNumber = parseInt(e.target.value || '0', 10);
      if (Number.isNaN(number)) {
        return;
      }
      if (!('number' in value)) {
        setNumber(newNumber);
      }
      triggerChange({
        number: newNumber,
      });
    };
    const onCurrencyChange = (newCurrency) => {
      if (!('currency' in value)) {
        setCurrency(newCurrency);
      }
      triggerChange({
        currency: newCurrency,
      });
    };
    return (
      <span>
        <Input
          type="text"
          value={value.number || number}
          onChange={onNumberChange}
          style={{
            width: 100,
          }}
        />
        <Select
          value={value.currency || currency}
          style={{
            width: 80,
            margin: '0 8px',
          }}
          onChange={onCurrencyChange}
        >
          <Option value="cm">cm</Option>
          <Option value="inch">inch</Option>
        </Select>
      </span>
    );
  };


function PackageForm({onFinish, initialValues}){
    

    const validateMessages = { 
        required: '${label} is required!'
    };
    const checkNumber = (_, value) => {
        // console.log("number is ", value.number)
        if (value.number > 0) {
          return Promise.resolve();
        }
        return Promise.reject(new Error('${label}  must be greater than zero!'));
    };
    return(
        <Form {...layout} name="nest-messages" 
        onFinish={onFinish} 
        style={{ maxWidth: 800}} 
        validateMessages={validateMessages}
        initialValues={initialValues}
        labelCol={{
            span: 400
        }}
        wrapperCol={{
            span: 100
        }}>
                    <Form.Item
                        name={['package', 'Weight']}
                        label="Package Weight"
                        rules={[
                            {
                            required: true,
                            validator: checkNumber,
                            },]}
                    >   
                        <WeightInput  />
                    </Form.Item>
                    <Form.Item
                        name={['package', 'Height']}
                        label="Package Height"
                        rules={[
                            {
                            required: true, 
                            validator: checkNumber,
                            },]}
                    >
                        <LengthInput/>
                    </Form.Item>
                    
                    <Form.Item
                        name={['package', 'Width']}
                        label="Package Width"
                        rules={[
                            {
                            required: true, 
                            validator: checkNumber,
                            },]}
                    >
                         <LengthInput/>
                    </Form.Item>

                    <Form.Item
                        name={['package', 'Length']}
                        label="Package Length"
                        rules={[
                            {
                            required: true, 
                            validator: checkNumber, 
                            },]}
                    >
                         <LengthInput/>
                    </Form.Item>
                    <Form.Item 
                        name={['package', 'Description']}
                        label="Package description"
                        rules={[
                            {
                            required: true,  
                            },]}>
                        <TextArea rows={4} />
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
export default PackageForm;