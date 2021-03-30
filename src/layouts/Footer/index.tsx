import React, { FC } from 'react';
import Image from 'next/image';

import { Icon } from 'components';
import { Container, Link } from './styles';

const Footer: FC = () => (
  <Container className="bg-black">
    <div className="container d-flex justify-between">
      <Link href="https://www.wpp.com/" target="_blank">
        <Image src="/wppcompany.png" width={142} height={27} />
      </Link>
      <ul className="list-inline">
        <li>
          <Link href="https://www.facebook.com/agencia.jussi" target="_blank">
            <Icon name="facebook" alt="facebook" />
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/jussi/" target="_blank">
            <Icon name="instagram" alt="instagra" />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/company/agencia-jussi/"
            target="_blank"
          >
            <Icon name="linkedin" alt="linkedin" />
          </Link>
        </li>
      </ul>
    </div>
  </Container>
);

export default Footer;
