import React, { FC } from 'react';
import Image from 'next/image';

import { Container, Title, Arrow } from './styles';

const Stores: FC = () => (
  <Container className="bg-grey">
    <div className="container d-md-flex justify-between">
      <Title>Nossas principais lojas VTEX</Title>
      <Arrow>→</Arrow>
      <ul className="list-inline">
        <li>
          <Image src="/partners/brastemp.svg" width={160} height={25} />
        </li>
        <li>
          <Image src="/partners/compra-certa.svg" width={180} height={21} />
        </li>
        <li>
          <Image src="/partners/consul.svg" width={88} height={38} />
        </li>
        <li>
          <Image src="/partners/thebar.svg" width={130} height={38} />
        </li>
      </ul>
    </div>
  </Container>
);

export default Stores;
