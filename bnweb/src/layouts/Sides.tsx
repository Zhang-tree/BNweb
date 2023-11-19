import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { ContainerQuery } from 'react-container-query'
// import BnNameDataUpload from  "../app/bnNameCenter/routes/bnNameDataUpload"
const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

const Side: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();


  const query = {
    'screen-xs': {
      maxWidth: 575
    },
    'screen-sm': {
      minWidth: 576,
      maxWidth: 767
    },
    'screen-md': {
      minWidth: 768,
      maxWidth: 991
    },
    'screen-lg': {
      minWidth: 992,
      maxWidth: 1199
    },
    'screen-xl': {
      minWidth: 1200
    }
  };


  return (
    <>
    
      <Layout style={{ minHeight: '100vh' }}>
     
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <span style={{ color: 'white', fontSize: 12, verticalAlign: 'sub', width: '8%', height: '3%' }}>
        <img src="https://img1.baidu.com/it/u=2818718238,3512451122&fm=253&fmt=auto&app=138&f=JPEG?w=249&h=218" style={{ width: '100%', height: '10%' }} alt="" />
      </span>
          <div className="demo-logo-vertical" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }} />
          <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
            {/* <BnNameDataUpload/> */}
          </div>
        </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default Side;