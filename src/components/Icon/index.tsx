import React from 'react';
import Image from 'next/image';

type Props = {
  name:
    | 'search'
    | 'cart'
    | 'facebook'
    | 'instagram'
    | 'linkedin'
    | 'menu-mobile';
  alt: string;
  width?: number;
  height?: number;
};

const Icon: React.FC<Props> = ({ name, alt, width = 24, height = 24 }) => (
  <Image src={`/icon/${name}.svg`} alt={alt} width={width} height={height} />
);

export default Icon;
