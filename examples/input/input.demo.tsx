import InputExample from './input.example';
import React, {Fragment} from 'react';
import Demo from '../../demo';

const IconDemo = () => {
  return (
    <Fragment>
      <Demo code={require('!!raw-loader!./input.example.tsx').default}>
        <InputExample/>
      </Demo>
    </Fragment>
  );
};

export default IconDemo;