import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/Link';

import { Props } from './types';

const Brand: FC<Props> = ({ width = 184, height = 40 }) => (
  <Link href="/">
    <a>
      <Image src="/brand.svg" alt="Jüssi" width={width} height={height} />
    </a>
  </Link>
);

export default Brand;
