import React, { useState } from 'react';
import Input from '../../lib/input/input';

export default function () {
  const [value, setValue] = useState('');
  return (
    <div>
      <h2>Input 输入框</h2>
      <div className="description">
        通过鼠标或键盘输入内容，是最基础的表单域的包装。
      </div>
      <h3>示例</h3>
      <div className="example-content">
        <div className="example-content-component">
          <Input value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
        <div className="example-content-desc">
          <div className="example-content-desc-title">基本使用</div>
          <div>基本使用，支持传入原生&lt;input /&gt;标签属性，建议使用受控组件。</div>
        </div>
      </div>
    </div>
  );
}
