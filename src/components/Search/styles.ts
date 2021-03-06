import styled from 'styled-components';

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

export const Link = styled.a`
  background-color: ${(props) => props.theme.grey};
  padding: 10px 15px;
  border-radius: 5px;
  margin-bottom: 10px;
  display: block;

  p {
    margin: 0;
  }
`;
