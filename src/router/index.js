import React, { useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import Siderbar from '../modules/Sidebar';
import Header from '../modules/Header';
import Footer from '../modules/Footer';
import Content from '../modules/Content';


function Router () {

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Siderbar />
      <Layout>
        <Header />
        <Content />
        <Footer />
      </Layout>
    </Layout>
  );
}



export default Router