import React from 'react';
import Image from 'next/image';

type Props = {
  width?: number;
  height?: number;
};

const Brand: React.FC<Props> = ({ width = 184, height = 40 }) => (
  <Image src="/brand.svg" alt="Jüssi" width={width} height={height} />
);

export default Brand;
