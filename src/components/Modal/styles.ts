import styled from 'styled-components';
import { rgba } from 'polished';

export const BoxModal = styled.div`
  background-color: ${(props) => rgba(props.theme.black, 0.4)};
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 2;
`;

export const ModalCloseBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
`;

export const ModalContent = styled.div`
  background-color: ${(props) => props.theme.white};
  position: absolute;
  width: 90%;
  height: 100vh;
  max-width: 800px;
  max-height: 500px;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  z-index: 2;
`;

export const ModalClose = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const Content = styled.div`
  overflow: auto;
  height: 100%;

  &::-webkit-scrollbar {
    width: 0;
  }
`;
