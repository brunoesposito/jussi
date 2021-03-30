import theme from 'themes';

export type Props = {
  color?: keyof typeof theme;
  bars?: boolean;
  barsColor?: keyof typeof theme;
};
