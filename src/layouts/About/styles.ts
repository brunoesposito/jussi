import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  padding-top: 65px;
  padding-bottom: 65px;

  @media (max-width: 992px) {
    background-color: ${(props) => props.theme.grey};
  }

  &::before {
    content: '';
    background-color: ${(props) => props.theme.grey};
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 50%;

    @media (max-width: 992px) {
      display: none;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 241px;

  @media (max-width: 992px) {
    max-width: 100%;
  }
`;

export const Text = styled.p`
  margin-bottom: 40px;
`;

export const BoxImage = styled.div`
  @media (max-width: 992px) {
    display: none;
  }
`;

export const Link = styled.a``;
