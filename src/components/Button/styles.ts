import styled from 'styled-components';
import { rgba } from 'polished';

import { Props } from './types';

export const ButtonStyle = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid
    ${(props) =>
      props.outline ? props.theme[props.background] : 'transparent'};
  background-color: ${(props) =>
    props.outline ? 'transparent' : props.theme[props.background]};
  color: ${(props) => props.theme[props.color]};
  border-radius: 6px;
  padding: 0 20px;
  height: 48px;

  &:hover {
    border: 1px solid
      ${(props) =>
        props.outline
          ? rgba(props.theme[props.background], 0.9)
          : 'transparent'};
    background-color: ${(props) =>
      props.outline ? 'transparent' : rgba(props.theme[props.background], 0.9)};
    color: ${(props) => rgba(props.theme[props.color], 0.9)};
  }
`;
