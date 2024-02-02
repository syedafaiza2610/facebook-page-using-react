import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

import React from 'react';
import { Col, Row } from 'antd';
import logo1 from "./assets/images/logo.png"
import Login from './components/login';
const App = () => (
  <div>

    <Row>
      <Col xl={12} lg={12} md={8} sm={24} xs={24}>
        <div class="left">
          <h1 className='leftpara'>facebook</h1>
          <p className='leftpara1'>Facebook helps you connect and share with the people in your life.</p>
        </div>

      </Col>
      <Col xl={12} lg={12} md={8} sm={24} xs={24}><Login />
      <div className="last1"><a style={{color:"black"}}><b>Create a Page</b></a> <div className='last2'>for a celebrity, brand or business.</div></div>
      </Col>
    </Row>

  </div>
);
export default App;