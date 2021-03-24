import InputExample from './input.example';
import React, {Fragment} from 'react';
import Demo from '../../demo';

const InputDemo = () => {
  return (
    <Fragment>
      <Demo code={require('!!raw-loader!./input.example.tsx').default}>
        <InputExample/>
      </Demo>
    </Fragment>
  );
};

export default InputDemo;