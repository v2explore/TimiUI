import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { scopedClassMaker } from './lib/helpers/helpers';
import { Icon } from './lib/index';
import IconExample from './examples/icon.example';
import DialogExample from './examples/dialog.example';
import LayoutExample from './examples/layout.example';
import './example.scss';

const scopedClass = scopedClassMaker('tm-example');

ReactDOM.render(
  <div>
    <Router>
      <header className={scopedClass('header')}>
        <span className={scopedClass('header-title')}>
          <Icon className={scopedClass('header-icon')} name="timiui" />
          <span>𝙏𝙄𝙈𝙄 𝙐𝙄</span>
        </span>
        <span>
          <Icon name="github" color="white" />
        </span>
      </header>
      <aside>
        <ol>
          <li>
            <Link to="/layout">Layout</Link>
          </li>
          <li>
            <Link to="/icon">Icon</Link>
          </li>
          <li>
            <Link to="/dialog">Dialog</Link>
          </li>
        </ol>
      </aside>
      <main className="site-main">
        <Route path="/layout" component={LayoutExample} />
        <Route path="/icon" component={IconExample} />
        <Route path="/dialog" component={DialogExample} />
      </main>
    </Router>
  </div>,
  document.querySelector('#root'),
);
