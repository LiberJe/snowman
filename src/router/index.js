import React, { useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import routerConfig from '../config/router.js';
import sidebarConfig from '../config/sidebar.js';

const { Sider, Footer, Header, Content } = Layout;
const { SubMenu } = Menu;


function Router () {

  const [collapsed, setCollapsed] = useState(false)

  const onCollapse = () => {
    setCollapsed(!collapsed)
  }

  const sidebarRender = (data = []) => {
    
    return data.map((item, i) => {
      if (!item.name) return

      if (item.childrens && item.childrens.length) {
        return <SubMenu key={item.key} title={
          <span>
            {item.icon ? <Icon type={item.icon} /> : null}
            <span>{item.name}</span>
          </span>
        }>
          {sidebarRender(item.childrens)}
        </SubMenu>
      } else {
        return <Menu.Item key={item.key}>
          <Link to={routerConfig[item.key]['path']}>
            {item.icon ? <Icon type={item.icon} /> : null}
            <span>{item.name}</span>
          </Link>
        </Menu.Item>
      }
      
    })
  }

  const breadcrumbRender = (data = []) => {

    return <Breadcrumb style={{ margin: '16px 0' }}>
      {
        data.map((item, i) => {
          return <Breadcrumb.Item>{item.name}</Breadcrumb.Item>
        })
      }
    </Breadcrumb>
  }

  const routeRender = (data = {}) => {

    return <Switch>
      {
        Object.keys(data).map((item, i) => {
          return <Route path={data[item]['path']} key={data[item]['path']}>
            {data[item]['module']}
          </Route>
        })
      }
    </Switch>
  }


  return (
    <Layout style={{ minHeight: '100vh' }}>
      <BrowserRouter>

        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            {sidebarRender(sidebarConfig)}
          </Menu>
        </Sider>

        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />

          <Content style={{ margin: '0 16px' }}>
            {breadcrumbRender()}
            {/* {routeRender(routerConfig)} */}
            <Switch>
              <Route path="/financial_report" key="/financial_report">
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Bill is a cat.</div>
              </Route>
            </Switch>
          </Content>

          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by jelewine</Footer>
        </Layout>

      </BrowserRouter>
    </Layout>
  );
}



export default Router