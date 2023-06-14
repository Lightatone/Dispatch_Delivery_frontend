import { Button, Form, Input, message, Modal } from 'antd';
import React, { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { register } from '../utils';


function Register() {
  const [displayModal, setDisplayModal] = useState(false)


  const handleCancel = () => {
    setDisplayModal(false)
  }


  const signupOnClick = () => {
    setDisplayModal(true)
  }


  const onFinish = (data) => {
    register(data)
      .then(() => {
        setDisplayModal(false)
        message.success('Successfully signed up');
      }).catch((err) => {
        message.error(err.message);
      })
  }


  return (
    <>
      <Button shape="round" type="primary" onClick={signupOnClick}>
        Register</Button>
    </>


  )
}


export default Register;
