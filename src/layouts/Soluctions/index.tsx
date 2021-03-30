import React, { FC } from 'react';

import { Title, Product } from 'components';
import { Container, List, Itens } from './styles';

const Soluctions: FC = () => {
  const productList: PropsProduct[] = [
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
    <Container className="container">
      <Title bars>NOSSAS SOLUÇÕES</Title>
      <List className="d-md-flex justify-between">
        {productList.map(({ identification, name, description, feature }) => (
          <Itens key={identification}>
            <Product
              identification={identification}
              name={name}
              description={description}
              feature={feature}
            />
          </Itens>
        ))}
      </List>
    </Container>
  );
};

export default Soluctions;
