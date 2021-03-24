import ButtonExample from './button.example';
import React, {Fragment} from 'react';
import Demo from '../../demo';

const ButtonDemo = () => {
  return (
    <Fragment>
      <Demo code={require('!!raw-loader!./button.example.tsx').default}>
        <ButtonExample/>
      </Demo>
    </Fragment>
  );
};

export default ButtonDemo;