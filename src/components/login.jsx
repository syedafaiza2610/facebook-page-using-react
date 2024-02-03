import React from 'react';
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import SigninPage from '../pages/Signup';

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const LoginForm = () => (
  <div className='Container1'>
    <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
          {
           pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\. [0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
         message:"Please Enter correct email"
         }
        ]}
      >
        <Input className='input' placeholder='Email address or phone number' />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password className='input' placeholder='Password' />
      </Form.Item>

      <Form.Item>
        <Button className='btn' htmlType="submit"> Log in </Button>
      </Form.Item>

      <p className="forget">Forgotten password?</p>
      <hr />

      <div className="sign-up">
        <Button className="btn1"  onClick={() => SigninPage}>Create new account</Button>
      </div>
    </Form>
  </div>
 
);

export default LoginForm;
