import React, { FC } from 'react';
import Image from 'next/image';

import { Props } from './types';

const Brand: FC<Props> = ({ width = 184, height = 40 }) => (
  <Image src="/brand.svg" alt="Jüssi" width={width} height={height} />
);

export default Brand;
