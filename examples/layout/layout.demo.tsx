import LayoutExample from './layout.example';
import React, {Fragment} from 'react';
import Demo from '../../demo';

const IconDemo = () => {
  return (
    <Fragment>
      <Demo code={require('!!raw-loader!./layout.example.tsx').default}>
        <LayoutExample/>
      </Demo>
    </Fragment>
  );
};

export default IconDemo;