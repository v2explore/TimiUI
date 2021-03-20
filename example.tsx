import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import { Asider, Content, Footer, Header, Icon, Layout } from './lib/index';
import IconDemo from './examples/icon/icon.demo';
import DialogDemo from './examples/dialog/dialog.demo';
import LayoutDemo from './examples/layout/layout.demo';
import './example.scss';

ReactDOM.render(
  <Router>
    <Layout className="tm-site-page">
      <Header className="tm-site-header">
        <span className="tm-site-header-title">
          <Icon className="tm-site-header-icon" name="timiui" />
          <span>𝙏𝙄𝙈𝙄 𝙐𝙄</span>
        </span>
        <span>
          <Icon name="github" color="white" />
        </span>
      </Header>
      <Layout>
        <Asider className="tm-site-aside">
          <h2>组件</h2>
          <ul>
            <li>
              <NavLink to="/layout">Layout</NavLink>
            </li>
            <li>
              <NavLink to="/icon">Icon</NavLink>
            </li>
            <li>
              <NavLink to="/dialog">Dialog</NavLink>
            </li>
          </ul>
        </Asider>
        <Content className="tm-site-main">
          <Route path="/layout" component={LayoutDemo} />
          <Route path="/icon" component={IconDemo} />
          <Route path="/dialog" component={DialogDemo} />
        </Content>
      </Layout>
      <Footer className="tm-site-footer">&copy;v2explore</Footer>
    </Layout>
  </Router>,
  document.querySelector('#root'),
);
