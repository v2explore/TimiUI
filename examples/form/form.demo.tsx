import FormExample from './form.example';
import React, {Fragment} from 'react';
import Demo from '../../demo';

const FormDemo = () => {
  return (
    <Fragment>
      <Demo code={require('!!raw-loader!./form.example.tsx').default}>
        <FormExample/>
      </Demo>
    </Fragment>
  );
};

export default FormDemo;