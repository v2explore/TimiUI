import React from 'react';
import Button from '../../lib/button/button';
import './button.example.scss';

export default function () {
  return (
    <div>
      <h2>Button 按钮</h2>
      <div className="description">响应用户点击行为，触发相应业务逻辑。</div>
      <h3>示例</h3>
      <div className="example-content">
        <div className="example-content-component">
          <Button level="normal">按钮</Button>
          <Button level="important">按钮</Button>
          <Button level="danger">按钮</Button>
        </div>
        <div className="example-content-desc">
          <div className="example-content-desc-title">按钮类型</div>
          <div>按钮有三种基本类型默认按钮，主要按钮，危险按钮。</div>
        </div>
      </div>
    </div>
  );
}
