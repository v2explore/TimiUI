import React from 'react';
import './importIcons';
import './icon.scss';
import { classnames } from '../helpers/helpers';
interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
  color?: string;
}
const Icon: React.FC<IconProps> = ({ className, name, color, ...restProps }) => {
  return (
    <svg className={classnames('tm-icon', className)} fill={color} {...restProps}>
      <use xlinkHref={`#${name}`}></use>
    </svg>
  );
};
export default Icon;
