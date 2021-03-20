import React, { ReactElement } from 'react';
import { scopedClassMaker, classnames } from '../helpers/helpers';
import Asider from './asider';
import './layout.scss';

const sc = scopedClassMaker('tm-layout');

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Layout: React.FC<Props> = (props) => {
  const { className, children, ...rest } = props;
  const _children = children as Array<ReactElement>;
  const hasAsider = _children && _children.length &&
    _children.reduce((result, curr) =>  result || curr.type === Asider, false);
  return <div className={classnames(sc(''), className , hasAsider ? sc('hasAsider') : '')} {...rest}>{children}</div>;
};

export default Layout;
