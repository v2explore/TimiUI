import React from 'react';
import { scopedClassMaker, classnames } from '../helpers/helpers';

const sc = scopedClassMaker('tm-layout');

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Header: React.FC<Props> = (props) => {
  const { className, children, ...rest } = props;
  return <div className={classnames(sc('header'), className)} {...rest}>{children}</div>;
};

export default Header;
