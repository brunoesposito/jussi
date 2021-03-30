import React, {
  useState,
  ForwardRefRenderFunction,
  forwardRef,
  useImperativeHandle,
} from 'react';

import { Icon } from 'components';
import { BoxModal, ModalClose, ModalCloseBg, ModalContent } from './styles';
import { Props } from './types';

const Modal: ForwardRefRenderFunction<PropsModal, Props> = (
  { children },
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
        <ModalContent>
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
          {children}
        </ModalContent>
      </BoxModal>
    )
  );
};

export default forwardRef(Modal);
