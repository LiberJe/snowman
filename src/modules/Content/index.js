import React, { useState } from 'react';
import { Layout, Icon, Menu, Breadcrumb } from 'antd';

const { Content } = Layout;

function ContentModule () {

  const [collapsed, setCollapsed] = useState(false)

  const onCollapse = () => {
    setCollapsed(!collapsed)
  }

  return (
    <Content style={{ margin: '0 16px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>User</Breadcrumb.Item>
        <Breadcrumb.Item>Bill</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Bill is a cat.</div>
    </Content>
  );
}



export default ContentModule