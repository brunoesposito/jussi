import React, { FC, useRef, useState } from 'react';

import { Title, Product, Modal } from 'components';
import { Container, List, Itens, ContentModal, TitleModal } from './styles';

const Soluctions: FC = () => {
  const modalRef = useRef<PropsModal>(null);
  const [modalContent, setModalContent] = useState<
    Omit<PropsProduct, 'onClick'> | undefined
  >();

  const openProductDetail = ({
    identification,
    name,
    description,
    feature,
  }: Omit<PropsProduct, 'onClick'>) => {
    setModalContent({
      identification,
      name,
      description,
      feature,
    });
    modalRef.current.toogleModal();
  };

  const productList: Omit<PropsProduct, 'onClick'>[] = [
    {
      identification: 'P1',
      name: 'Nome do Produto #1',
      description: 'Descrição do Produto #1',
      feature: ['Feature 1', 'Feature 2', 'Feature 3'],
    },
    {
      identification: 'P2',
      name: 'Nome do Produto #2',
      description: 'Descrição do Produto #2',
      feature: ['Feature 1', 'Feature 2', 'Feature 3'],
    },
    {
      identification: 'P3',
      name: 'Nome do Produto #3',
      description: 'Descrição do Produto #3',
      feature: ['Feature 1', 'Feature 2'],
    },
    {
      identification: 'P4',
      name: 'Nome do Produto #4',
      description: 'Descrição do Produto #4',
      feature: ['Feature 1'],
    },
  ];

  return (
    <Container id="soluctions" className="container">
      <Title bars>NOSSAS SOLUÇÕES</Title>
      <List className="d-md-flex justify-between">
        {productList.map(({ identification, name, description, feature }) => (
          <Itens key={identification}>
            <Product
              identification={identification}
              name={name}
              description={description}
              feature={feature}
              onClick={() =>
                openProductDetail({
                  identification,
                  name,
                  description,
                  feature,
                })
              }
            />
          </Itens>
        ))}
      </List>
      <Modal ref={modalRef}>
        <ContentModal className="d-flex justify-center flex-column text-center">
          <TitleModal>{modalContent?.identification}</TitleModal>
          <p className="text-secondary">{modalContent?.name}</p>
          <p>{modalContent?.description}</p>
          <ul className="list-inline justify-center">
            {modalContent?.feature.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </ContentModal>
      </Modal>
    </Container>
  );
};

export default Soluctions;
