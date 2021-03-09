import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon';

const fn: React.MouseEventHandler = (e) => {
  console.log('icon', e.target)
}

ReactDOM.render(<div><Icon name="bin" onClick={fn} /></div>, document.querySelector('#root'))