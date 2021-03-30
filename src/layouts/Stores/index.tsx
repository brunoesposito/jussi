import React, { FC } from 'react';
import Image from 'next/image';

import { Container, Title, Arrow, Link } from './styles';

const Stores: FC = () => (
  <Container className="bg-grey">
    <div className="container d-md-flex justify-between">
      <Title>Nossas principais lojas VTEX</Title>
      <Arrow>→</Arrow>
      <ul className="list-inline">
        <li>
          <Link href="https://www.brastemp.com.br/" target="_blank">
            <Image src="/partners/brastemp.svg" width={160} height={25} />
          </Link>
        </li>
        <li>
          <Link href="https://www.compracerta.com.br/" target="_blank">
            <Image src="/partners/compra-certa.svg" width={180} height={21} />
          </Link>
        </li>
        <li>
          <Link href="https://loja.consul.com.br/" target="_blank">
            <Image src="/partners/consul.svg" width={88} height={38} />
          </Link>
        </li>
        <li>
          <Link href="https://br.thebar.com/" target="_blank">
            <Image src="/partners/thebar.svg" width={130} height={38} />
          </Link>
        </li>
      </ul>
    </div>
  </Container>
);

export default Stores;
