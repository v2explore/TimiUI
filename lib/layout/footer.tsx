import React from 'react';
import { scopedClassMaker } from '../utils/classes';
import classnames from '../helpers/classnames';

const sc = scopedClassMaker('tm-layout');

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Footer: React.FC<Props> = (props) => {
  const { className, children, ...rest } = props;
  return <div className={classnames(sc('footer'), className)} {...rest}>{children}</div>;
};

export default Footer;
