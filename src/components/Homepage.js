import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import React, { useState } from 'react';
import { Layout, Menu, message } from 'antd';
import { logout } from '../utils';
import PageHeader from './Pageheader';
import Createorder from './Createorder';
import './Homepage.css';



const { Header, Content, Sider } = Layout;

function getItem(label, key, icon) {
  return {
    key,
    icon,
    label,
  };
}
const items = [
  getItem('Order', '1', <PieChartOutlined />),
  getItem('Current order', '2', <DesktopOutlined />),
  getItem('Historical orders', '3', <FileOutlined />), 
  getItem('user', '4', <UserOutlined />),
];


function Homepage() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [collapsed, setCollapsed] = useState(false);

  const signinOnSuccess = () => {
    setLoggedIn(true);
  }

  const signoutOnClick = () => {
    logout().then(() => {
      setLoggedIn(false)
      message.success('Successfully Signed out')
    }).catch((err) => {
      message.error(err.message)
    })
  }

  return (
    <Layout>
      <Header>
        <PageHeader
          loggedIn={loggedIn}
          signoutOnClick={signoutOnClick}
          signinOnSuccess={signinOnSuccess}
        />
        </Header>
      <Layout>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
        <Layout style={{ padding: '24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              height: 800,
              overflow: 'auto'
            }}
          >
            {'Home'}
           
          </Content>
        </Layout>
      </Layout>

    </Layout>
  );
}

export default Homepage;