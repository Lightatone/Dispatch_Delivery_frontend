import { Button, Form, Input, message, Modal } from 'antd'
import React, { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { login } from '../utils'


function Login({ onSuccess }) {
  const [displayModal, setDisplayModal] = useState(false)


  const handleCancel = () => {
    setDisplayModal(false)
  }


  const signinOnClick = () => {
    setDisplayModal(true)
  }


  const onFinish = (data) => {
    login(data)
      .then(() => {
        setDisplayModal(false)
        message.success(`Welcome back`)
        onSuccess()
      }).catch((err) => {
        message.error(err.message)
      })
  }


  return (
    <>
      login here
      <Button shape="round" onClick={signinOnClick} style={{ marginRight: '20px' }}>
        Login
      </Button>
    </>
  )
}

export default Login