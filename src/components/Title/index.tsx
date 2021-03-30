import React, { FC } from 'react';

import { Props } from './types';
import { TitleComponent, Bars } from './styles';

const Title: FC<Props> = ({
  children,
  color = 'dark',
  bars = false,
  barsColor = 'primary',
}) => (
  <TitleComponent color={color}>
    {bars && <Bars color={barsColor}>//</Bars>}
    {children}
  </TitleComponent>
);

export default Title;
