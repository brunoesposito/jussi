import React, { FC } from 'react';
import Image from 'next/image';

import { Props } from './types';

const Icon: FC<Props> = ({ name, alt, width = 24, height = 24 }) => (
  <Image src={`/icon/${name}.svg`} alt={alt} width={width} height={height} />
);

export default Icon;
