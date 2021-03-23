import ButtonExample from './button.example';
import React, {Fragment} from 'react';
import Demo from '../../demo';

const IconDemo = () => {
  return (
    <Fragment>
      <Demo code={require('!!raw-loader!./button.example.tsx').default}>
        <ButtonExample/>
      </Demo>
    </Fragment>
  );
};

export default IconDemo;