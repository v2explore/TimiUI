import React, { ReactElement } from 'react';
import Layout from '../../lib/layout/layout';
import Header from '../../lib/layout/header';
import Asider from '../../lib/layout/asider';
import Content from '../../lib/layout/content';
import Footer from '../../lib/layout/footer';
import './layout.example.scss';

export default (): ReactElement => {
  return (
    <div className="tm-layout-example-wrap">
      <h2>Layout 布局</h2>
      <div className="description">进行页面整体布局。</div>
      <h3>示例</h3>
      <div>
        <div className="example-content">
          <div className="example-content-component">
            <Layout className="tm-layout-example">
              <Header className="tm-layout-example-header">Header</Header>
              <Content className="tm-layout-example-content">Content</Content>
              <Footer className="tm-layout-example-footer">Footer</Footer>
            </Layout>
          </div>
          <div className="example-content-desc">
            <div className="example-content-desc-title">上中下布局</div>
            <div>经典上中下布局，多用于展示类网站。</div>
          </div>
        </div>
        <div className="example-content">
          <div className="example-content-component">
            <Layout className="tm-layout-example">
              <Header className="tm-layout-example-header">Header</Header>
              <Layout className="tm-layout-example">
                <Asider className="tm-layout-example-asider">Asider</Asider>
                <Content className="tm-layout-example-content">Content</Content>
              </Layout>
              <Footer className="tm-layout-example-footer">Footer</Footer>
            </Layout>
          </div>
          <div className="example-content-desc">
            <div className="example-content-desc-title">顶部-左侧边布局</div>
            <div>左侧边布局，多用于管理类应用网站。</div>
          </div>
        </div>
      </div>
      <div>
        <div className="example-content">
          <div className="example-content-component">
            <Layout className="tm-layout-example">
              <Header className="tm-layout-example-header">Header</Header>
              <Layout className="tm-layout-example">
                <Content className="tm-layout-example-content">Content</Content>
                <Asider className="tm-layout-example-asider">Asider</Asider>
              </Layout>
              <Footer className="tm-layout-example-footer">Footer</Footer>
            </Layout>
          </div>
          <div className="example-content-desc">
            <div className="example-content-desc-title">顶部-右侧边布局</div>
            <div>右侧边布局，多用于管理类应用网站。</div>
          </div>
        </div>
        <div className="example-content">
          <div className="example-content-component">
            <Layout className="tm-layout-example">
              <Asider className="tm-layout-example-asider">Aside</Asider>
              <Layout className="tm-layout-example">
                <Header className="tm-layout-example-header">Header</Header>
                <Content className="tm-layout-example-content">Content</Content>
                <Footer className="tm-layout-example-footer">Footer</Footer>
              </Layout>
            </Layout>
          </div>
          <div className="example-content-desc">
            <div className="example-content-desc-title">侧边布局</div>
            <div>侧边布局，左右结构，可将菜单整体放置左侧，有很高的工作效率。</div>
          </div>
        </div>
      </div>
    </div>
  );
};
