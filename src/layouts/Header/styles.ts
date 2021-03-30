import styled from 'styled-components';
import { rgba } from 'polished';

const BaseIcon = styled.div`
  margin-left: 30px;

  @media (max-width: 992px) {
    display: none;
  }
`;

export const Container = styled.div`
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
    width: 100%;
  }
`;

export const Access = styled(BaseIcon)``;

export const Cart = styled(BaseIcon)``;

export const Menu = styled.ul`
  @media (max-width: 992px) {
    display: none !important;
  }
`;

export const MenuMobile = styled.div`
  background-color: ${(props) => rgba(props.theme.black, 0.4)};
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 2;

  @media (min-width: 992px) {
    display: none !important;
  }
`;

export const MenuCloseBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
`;

export const MobileContent = styled.div`
  background-color: ${(props) => props.theme.primary};
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  max-width: 60%;
  z-index: 2;

  @media (min-width: 768px) {
    max-width: 40%;
  }
`;

export const MenuClose = styled.div`
  position: absolute;
  top: 10px;
  right: -40px;
  background-color: ${(props) => props.theme.secondary};
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

export const MobileOptions = styled.div`
  padding: 20px;
  ul {
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 10px 0;
    }
  }
`;

export const MobilePages = styled.div`
  a {
    border-bottom: 2px solid ${(props) => props.theme.white};
    padding: 20px;
    display: block;
    background-color: ${(props) => props.theme.primary};

    &:hover {
      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme.secondary};
    }
  }
`;
