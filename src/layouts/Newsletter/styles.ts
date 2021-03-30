import styled from 'styled-components';

export const Content = styled.div`
  padding-top: 65px;
  padding-bottom: 65px;
  width: 90%;
  max-width: 675px;
  margin: auto;
`;

export const Form = styled.form`
  border-bottom: 1px solid ${(props) => props.theme.primary};
  width: 90%;
  max-width: 500px;
  margin: auto;
`;

export const Input = styled.input`
  width: 100%;
  background-color: transparent;
  border: 0;
  color: ${(props) => props.theme.white};
  height: 60px;
  line-height: 60px;

  &::placeholder {
    color: ${(props) => props.theme.white};
  }
`;
