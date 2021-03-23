import React, { useState } from 'react';
import Dialog, { alert, confirm } from '../../lib/dialog/dialog';
import Button from '../../lib/button/button';

export default function () {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [text, setText] = useState('Click me!');
  return (
    <div>
      <h2>Dialog 弹框</h2>
      <div className="description">
        用于在不跳转页面的情况下进行事务操作，也可进行便捷确认提示。
      </div>
      <h3>示例</h3>
      <div>
        <div className="example-content">
          <div className="example-content-component">
            <Button onClick={() => setVisible2(!visible)}>Button</Button>
            <Dialog visible={visible2} onClose={() => setVisible2(false)}>
              Here is some content...
            </Dialog>
          </div>
          <div className="example-content-desc">
            <div className="example-content-desc-title">基本使用</div>
            <div>基本常规弹框。</div>
          </div>
        </div>
        <div className="example-content">
          <div className="example-content-component">
            <Button onClick={() => setVisible(!visible)}>Button</Button>
            <Dialog
              visible={visible}
              onClose={() => setVisible(false)}
              footer={
                <Button
                  style={{ width: 100 }}
                  onClick={() => {
                    setText(text === '😎' ? '😊' : '😎');
                  }}
                >
                  {text}
                </Button>
              }
            >
              Here is some content...
            </Dialog>
          </div>
          <div className="example-content-desc">
            <div className="example-content-desc-title">自定义弹框</div>
            <div>基本使用对话框，footer可自定义。</div>
          </div>
        </div>
        <div className="example-content">
          <div className="example-content-component">
            <Button
              onClick={() =>
                alert('Here is some content...', () => console.log('ok'))
              }
            >
              alert
            </Button>
          </div>
          <div className="example-content-desc">
            <div className="example-content-desc-title">提示弹框</div>
            <div>展示提示信息。</div>
          </div>
        </div>
        <div className="example-content">
          <div className="example-content-component">
            <Button
              onClick={() =>
                confirm(
                  'Here is some content...',
                  () => console.log('yes'),
                  () => console.log('no'),
                )
              }
            >
              confirm
            </Button>
          </div>
          <div className="example-content-desc">
            <div className="example-content-desc-title">确认弹框</div>
            <div>涉及风险操作需要确认操作前展示。</div>
          </div>
        </div>
      </div>
    </div>
  );
}
