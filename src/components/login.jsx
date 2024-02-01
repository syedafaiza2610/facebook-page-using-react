import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import Link from 'antd/es/typography/Link';
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const Login = () => (

 <div className='Container1'>
    <Form
    name="basic"
    // labelCol={{
    //   span: 8,
    // }}
    // wrapperCol={{
    //   span: 16,
    // }}
    // style={{
    //   maxWidth: 600,
    // }}
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
      ]}
    >
      <Input className='input' />
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
      <Input.Password  className='input' />
    </Form.Item>


    <Form.Item
    //   wrapperCol={{
    //     offset: 8,
    //     span: 16,
    //   }}
    >
      <Button className='btn' > Log in </Button>
    </Form.Item>
    <p className="forget">Forgotten password?</p>
    <hr/>
                    <div className="sign-up">
                        {/* <Link href="" className="signup">Create new account</Link><br/> */}
                        <Button className="btn1"htmlType="submit">Create New Account</Button>
                    </div>
  </Form>
  </div>
);
export default Login;