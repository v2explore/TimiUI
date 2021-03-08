import React from 'react';
import './importIcons';
import './icon.scss';

interface IconProps {
  name: string;
}
const Icon: React.FC<IconProps> = (props) => {
  return (
    <svg className="tm-icon">
      <use xlinkHref={`#${props.name}`}></use>
    </svg>
  );
};
export default Icon;
