import React, { FC } from 'react';
import Image from 'next/image';

import { Icon } from 'components';
import { Container } from './styles';

const Footer: FC = () => (
  <Container className="bg-black">
    <div className="container d-flex justify-between">
      <Image src="/wppcompany.png" width={142} height={27} />
      <ul className="list-inline">
        <li>
          <Icon name="facebook" alt="facebook" />
        </li>
        <li>
          <Icon name="instagram" alt="instagra" />
        </li>
        <li>
          <Icon name="linkedin" alt="linkedin" />
        </li>
      </ul>
    </div>
  </Container>
);

export default Footer;
