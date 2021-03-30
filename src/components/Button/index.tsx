import React, { FC } from 'react';

import { Props } from './types';
import { ButtonStyle } from './styles';

const Button: FC<Props> = ({
  children,
  background = 'black',
  color,
  outline = false,
  ...rest
}) => (
  <ButtonStyle
    background={background}
    color={color}
    outline={outline}
    {...rest}
  >
    {children}
  </ButtonStyle>
);

export default Button;
