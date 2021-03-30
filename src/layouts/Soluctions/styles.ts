import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 65px;
  padding-bottom: 65px;
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

export const ContentModal = styled.div`
  height: 100%;
`;

export const TitleModal = styled.h2`
  margin-top: 0;
  background-color: ${(props) => props.theme.grey};
  width: 100%;
  padding: 20px 0;
  border-radius: 5px;
`;
