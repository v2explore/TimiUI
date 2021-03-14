import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import IconExample from './examples/icon.example';

ReactDOM.render(
  <div>
    <Router>
      <aside>
        <ol>
          <li>
            <Link to="/icon">Icon</Link>
          </li>
          <li>
            <Link to="/button">Button</Link>
          </li>
          <li>
            <Link to="/input">Input</Link>
          </li>
        </ol>
      </aside>
      <main className="site-main">
        <Route path="/icon" component={IconExample} />
      </main>
    </Router>
  </div>,
  document.querySelector('#root'),
);
