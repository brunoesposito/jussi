import styled from 'styled-components';

export const Box = styled.div`
  position: relative;
  flex: 1;
`;

export const Input = styled.input`
  width: 100%;
  color: ${(props) => props.theme.secondary};
  padding: 0 44px 0 20px;
  border: 1px solid ${(props) => props.theme.grey};
  border-radius: 24px;
  height: 40px;
  line-height: 40px;
  box-sizing: border-box;

  &::placeholder {
    color: ${(props) => props.theme.secondary};
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  border: 0;
  padding: 0 10px;
  background: transparent;
  transform: translateY(-50%);
`;
