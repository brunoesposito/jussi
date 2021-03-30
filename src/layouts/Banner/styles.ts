import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 0;
`;

export const Content = styled.div`
  width: 100%;

  @media (min-width: 992px) {
    max-width: 450px;
  }
`;

export const Title = styled.h1`
  position: relative;
  font-size: 4rem;
  margin-top: 0;

  span {
    margin-right: 20px;
    color: ${(props) => props.theme.white};

    @media (min-width: 992px) {
      position: absolute;
      right: 100%;
    }
  }
`;

export const Text = styled.p`
  margin-bottom: 40px;
`;

export const BoxImage = styled.div`
  width: 100%;
  margin: auto;

  @media (max-width: 992px) {
    display: none !important;
  }
`;
