import { Icon } from '../../lib';
import React from 'react';
import './dashboard.scss';

const Dashboard = () => {
  return (
    <div className="dashboard-example">
      <div className="dashboard-example-header">
        <Icon
          className="dashboard-example-icon"
          color="red"
          name="timiui-dashboard"
        />
        <span>𝙏𝙄𝙈𝙄 𝙐𝙄</span>
      </div>
      <div className="dashboard-example-desc">
        TIMI UI是一套基于React的PC前端组件库。
      </div>
      <div className="dashboard-example-title">使用 TypeScript</div>
      <div className="dashboard-example-desc">所有组件采用TypeScript编写，提供友好的代码提示。</div>
      <div className="dashboard-example-title">无第三方依赖</div>
      <div className="dashboard-example-desc">仅依赖 React、ReactDOM 两个核心库。</div>
      <div className="dashboard-example-title">如何使用？</div>
      <pre className="dashboard-example-code">
        <code>
          $  yarn add timiui-react
        </code>
      </pre>
      <div>
        或者
      </div>
      <pre className="dashboard-example-code">
        <code>
          $  npm install timiui-react --save
        </code>
      </pre>
    </div>
  );
};

export default Dashboard;
