import styled from 'styled-components';

const BaseIcon = styled.div`
  margin-left: 30px;

  @media (max-width: 992px) {
    display: none;
  }
`;

export const Header = styled.div`
  padding: 20px 0;
`;

export const BoxMenu = styled.div`
  cursor: pointer;
  margin-right: 10px;
  display: block;

  @media (min-width: 992px) {
    display: none;
  }
`;

export const BoxBrand = styled.div`
  margin-right: 20px;
`;

export const Options = styled.div`
  @media (max-width: 992px) {
    flex: 1;
  }
`;

export const Access = styled(BaseIcon)``;

export const Cart = styled(BaseIcon)``;

export const Menu = styled.ul`
  @media (max-width: 992px) {
    display: none !important;
  }
`;
