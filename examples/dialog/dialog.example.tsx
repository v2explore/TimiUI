import React, { useState } from 'react';
import Dialog, { alert, confirm } from '../../lib/dialog/dialog';

export default function () {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [text, setText] = useState('Click me!');
  return (
    <div>
      <h2>Dialog</h2>
      <div>
        <button onClick={() => setVisible(!visible)}>Button</button>
        <Dialog
          visible={visible}
          onClose={() => setVisible(false)}
          footer={
            <button
              style={{ width: 100 }}
              onClick={() => {
                setText(text === '😎' ? '😊' : '😎');
              }}
            >
              {text}
            </button>
          }
        >
          Here is some content...
        </Dialog>
      </div>
      <div>
        <button onClick={() => setVisible2(!visible)}>Button</button>
        <Dialog visible={visible2} onClose={() => setVisible2(false)}>
          Here is some content...
        </Dialog>
      </div>
      <div>
        <button
          onClick={() =>
            alert('Here is some content...', () => console.log('ok'))
          }
        >
          alert
        </button>
      </div>
      <div>
        <button
          onClick={() =>
            confirm(
              'Here is some content...',
              () => console.log('yes'),
              () => console.log('no'),
            )
          }
        >
          confirm
        </button>
      </div>
    </div>
  );
}

