import React from 'react';
import { scopedClassMaker } from '../helpers/classnames';
import classnames from '../helpers/classnames';

const sc = scopedClassMaker('tm-layout');

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Asider: React.FC<Props> = (props) => {
  const { className, children, ...rest } = props;
  return <div className={classnames(sc('asider'), className)} {...rest}>{children}</div>;
};

export default Asider;
