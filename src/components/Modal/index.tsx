import React, {
  useState,
  ForwardRefRenderFunction,
  forwardRef,
  useImperativeHandle,
} from 'react';

import { Icon } from 'components';
import {
  BoxModal,
  ModalClose,
  ModalCloseBg,
  ModalContent,
  Content,
} from './styles';
import { Props } from './types';

const Modal: ForwardRefRenderFunction<PropsModal, Props> = (
  { children, title },
  ref,
) => {
  const [visible, setVisible] = useState(false);

  const toogleModal = () => setVisible(!visible);

  useImperativeHandle(ref, () => ({
    toogleModal,
  }));

  return (
    visible && (
      <BoxModal>
        <ModalCloseBg onClick={toogleModal} />
        <ModalContent className="d-flex flex-column">
          <ModalClose
            className="bg-secondary d-flex justify-center"
            onClick={toogleModal}
          >
            <Icon
              name="close"
              alt="Fechar menu mobile"
              width={15}
              height={15}
            />
          </ModalClose>
          {title && <h2>{title}</h2>}
          <Content>{children}</Content>
        </ModalContent>
      </BoxModal>
    )
  );
};

export default forwardRef(Modal);
