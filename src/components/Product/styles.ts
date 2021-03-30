import styled from 'styled-components';
import { Button as ButtonComponent } from 'components';

export const Box = styled.div`
  border: 1px solid ${(props) => props.theme.grey};
  border-radius: 5px;
  padding: 15px;
  box-sizing: border-box;
`;

export const Identification = styled.span`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  line-height: 100px;
  font-size: 32px;
  margin-bottom: 45px;
  display: inline-block;
`;

export const BoxInfo = styled.div``;

export const Name = styled.p``;

export const Description = styled.p``;

export const FeatureList = styled.ul`
  margin-bottom: 20px;
  padding-left: 20px;
  list-style: disc;
  min-height: 57px;
`;

export const Button = styled(ButtonComponent)`
  width: 100%;
`;
