import { ButtonHTMLAttributes } from 'react';
import theme from 'themes';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: keyof typeof theme;
  background?: keyof typeof theme;
  outline?: boolean;
}
