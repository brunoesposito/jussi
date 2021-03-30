import styled from 'styled-components';
import { rgba } from 'polished';

export const Form = styled.form`
  flex: 1;
  position: relative;
  border: 1px solid ${(props) => props.theme.grey};
  border-radius: 24px;
  padding: 0 0 0 20px;
  box-sizing: border-box;
`;

export const Input = styled.input`
  width: 100%;
  color: ${(props) => props.theme.secondary};
  border: 0;
  height: 40px;
  line-height: 40px;
  background-color: transparent;
`;

export const BoxResult = styled.div`
  background-color: ${(props) => rgba(props.theme.black, 0.4)};
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 2;
`;

export const ResultCloseBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
`;

export const ResultContent = styled.div`
  background-color: ${(props) => props.theme.white};
  position: absolute;
  width: 90%;
  height: 100vh;
  max-width: 800px;
  max-height: 300px;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  z-index: 2;
`;

export const ResultClose = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
