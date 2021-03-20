import DialogExample from './dialog.example';
import React, {Fragment} from 'react';
import Demo from '../../demo';

const IconDemo = () => {
  return (
    <Fragment>
      <Demo code={require('!!raw-loader!./dialog.example.tsx').default}>
        <DialogExample/>
      </Demo>
    </Fragment>
  );
};

export default IconDemo;