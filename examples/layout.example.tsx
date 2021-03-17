import React from 'react';
import Layout from '../lib/layout/layout';
import Header from '../lib/layout/header';
import Asider from '../lib/layout/asider';
import Content from '../lib/layout/content';
import Footer from '../lib/layout/footer';
import './layout.example.scss';

export default function () {
  return (
    <div>
      <h2>Layout</h2>
      <div>
        <h3>第一个例子</h3>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
      <div>
        <h3>第二个例子</h3>
        <Layout>
          <Header>Header</Header>
          <Layout>
            <Asider>Asider</Asider>
            <Content>Content</Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </div>
      <div>
        <h3>第三个例子</h3>
        <Layout>
          <Header>Header</Header>
          <Layout>
            <Content>Content</Content>
            <Asider>Asider</Asider>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </div>
      <div>
        <h3>第四个例子</h3>
        <Layout>
          <Asider>Aside</Asider>
          <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  );
}
