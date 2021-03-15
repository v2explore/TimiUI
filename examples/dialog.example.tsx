import React, { useState } from 'react';
import Dialog, { alert } from '../lib/dialog/dialog';

export default function () {
  const [visible, setVisible] = useState(false);
  const [x, setx] = useState(false);
  return (
    <div>
      <h2>Dialog</h2>
      <div>
        <button onClick={() => setVisible(!visible)}>Button</button>
        <Dialog visible={visible} onClose={() => setVisible(false)}>
          弹框内容
        </Dialog>
      </div>
      <div>
        <button onClick={() => setx(!visible)}>Button</button>
        <Dialog visible={x} onClose={() => setx(false)}>
          弹框内容
        </Dialog>
      </div>
      <button onClick={() => alert('234')}>alert</button>
    </div>
  );
}
