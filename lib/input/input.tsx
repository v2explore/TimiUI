import React from 'react';
import { InputHTMLAttributes } from 'react';
import { classnames } from '../helpers/helpers';
import './input.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FunctionComponent<Props> = (props) => {
  const { className, ...rest } = props;
  return <input className={classnames('tm-input', className)} {...rest} />;
};
export default Input;
