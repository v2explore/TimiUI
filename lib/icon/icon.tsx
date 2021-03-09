import React from 'react';
import './importIcons';
import './icon.scss';
import classnames from '../helpers/classnames';
interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}
const Icon: React.FC<IconProps> = ({ className, name, ...restProps }) => {
  return (
    <svg className={classnames('tm-icon', className)} {...restProps}>
      <use xlinkHref={`#${name}`}></use>
    </svg>
  );
};
export default Icon;
