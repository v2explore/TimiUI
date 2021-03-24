import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import { Icon, Layout } from './lib/index';
import { Asider, Content, Footer, Header } from './lib/layout/layout';
import IconDemo from './examples/icon/icon.demo';
import DialogDemo from './examples/dialog/dialog.demo';
import LayoutDemo from './examples/layout/layout.demo';
import InputDemo from './examples/input/input.demo';
import ButtonDemo from './examples/button/button.demo';
import FormDemo from './examples/form/form.demo';
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
          <Icon name="github" color="white" style={{cursor: 'pointer'}} onClick={() => window.open('https://github.com/v2explore/TimiUI')} />
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
              <NavLink to="/button">Button</NavLink>
            </li>
            <li>
              <NavLink to="/input">Input</NavLink>
            </li>
            <li>
              <NavLink to="/dialog">Dialog</NavLink>
            </li>
            <li>
              <NavLink to="/form">Form</NavLink>
            </li>
          </ul>
        </Asider>
        <Content className="tm-site-main">
          <Route path="/layout" component={LayoutDemo} />
          <Route path="/icon" component={IconDemo} />
          <Route path="/button" component={ButtonDemo} />
          <Route path="/input" component={InputDemo} />
          <Route path="/dialog" component={DialogDemo} />
          <Route path="/form" component={FormDemo} />
        </Content>
      </Layout>
      <Footer className="tm-site-footer">&copy;v2explore</Footer>
    </Layout>
  </Router>,
  document.querySelector('#root'),
);
