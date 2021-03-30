import styled from 'styled-components';

export const TitleComponent = styled.h2`
  font-size: 2rem;
  color: ${(props) => props.theme[props.color]};
  margin: 0 0 20px;
`;

export const Bars = styled.span`
  color: ${(props) => props.theme[props.color]};
  margin-right: 5px;
`;
