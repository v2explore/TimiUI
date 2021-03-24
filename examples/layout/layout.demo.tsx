import LayoutExample from './layout.example';
import React, {Fragment} from 'react';
import Demo from '../../demo';

const LayoutDemo = () => {
  return (
    <Fragment>
      <Demo code={require('!!raw-loader!./layout.example.tsx').default}>
        <LayoutExample/>
      </Demo>
    </Fragment>
  );
};

export default LayoutDemo;