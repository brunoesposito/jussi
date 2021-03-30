import styled from 'styled-components';

export const Container = styled.div`
  margin: 65px auto;
`;

export const List = styled.div`
  margin: 0 -10px;
`;

export const Itens = styled.div`
  width: calc(50% - 20px);
  margin: 10px;
  display: inline-block;

  @media (min-width: 992px) {
    width: 100%;
  }
`;
