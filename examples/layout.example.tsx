import React, { ReactElement } from 'react';
import Layout from '../lib/layout/layout';
import Header from '../lib/layout/header';
import Asider from '../lib/layout/asider';
import Content from '../lib/layout/content';
import Footer from '../lib/layout/footer';
import './layout.example.scss';

export default (): ReactElement => {
  return (
    <div className="tm-layout-example">
      <h2>Layout</h2>
      <div>
        <h3>第一个例子</h3>
        <Layout className="tm-layout-example">
          <Header className="tm-layout-example-header">Header</Header>
          <Content className="tm-layout-example-content">Content</Content>
          <Footer className="tm-layout-example-footer">Footer</Footer>
        </Layout>
      </div>
      <div>
        <h3>第二个例子</h3>
        <Layout className="tm-layout-example">
          <Header className="tm-layout-example-header">Header</Header>
          <Layout className="tm-layout-example">
            <Asider className="tm-layout-example-asider">Asider</Asider>
            <Content className="tm-layout-example-content">Content</Content>
          </Layout>
          <Footer className="tm-layout-example-footer">Footer</Footer>
        </Layout>
      </div>
      <div>
        <h3>第三个例子</h3>
        <Layout className="tm-layout-example">
          <Header className="tm-layout-example-header">Header</Header>
          <Layout className="tm-layout-example">
            <Content className="tm-layout-example-content">Content</Content>
            <Asider className="tm-layout-example-asider">Asider</Asider>
          </Layout>
          <Footer className="tm-layout-example-footer">Footer</Footer>
        </Layout>
      </div>
      <div>
        <h3>第四个例子</h3>
        <Layout className="tm-layout-example">
          <Asider className="tm-layout-example-asider">Aside</Asider>
          <Layout className="tm-layout-example">
            <Header className="tm-layout-example-header">Header</Header>
            <Content className="tm-layout-example-content">Content</Content>
            <Footer className="tm-layout-example-footer">Footer</Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  );
};
