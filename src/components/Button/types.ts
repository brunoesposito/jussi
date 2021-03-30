import theme from 'themes';

export type Props = {
  color: keyof typeof theme;
  background?: keyof typeof theme;
  outline?: boolean;
};
