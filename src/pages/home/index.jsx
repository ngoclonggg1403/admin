import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import Products from "../Products";
import { useNavigate } from "react-router-dom";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  CalendarOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
const { Header, Sider, Content } = Layout;
const HomePages = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onClick = (event) => {
    navigate(event.key);
  };
  
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          onClick={onClick}
          defaultSelectedKeys={['1']}
          items={[
            {
              key: 'products',
              icon: <CalendarOutlined />,
              label: 'Products',           
            },
            {
              key: 'users',
              icon: <UserOutlined />,
              label: 'Users',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Products />
        </Content>
      </Layout>
    </Layout> 
  );
  
};
export default HomePages;
