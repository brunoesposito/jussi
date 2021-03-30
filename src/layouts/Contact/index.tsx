import React, { FC } from 'react';

import { Title } from 'components';
import { Content, BoxContact, Email } from './styles';

const Contact: FC = () => (
  <div className="bg-secondary text-center">
    <Content>
      <Title color="white">
        ESSA LOJA FOI CONSTRUÍDA USANDO UMA DAS NOSSAS SOLUÇÕES DA PLATAFORMA
        VTEX. TENHA A SUA.
      </Title>
      <BoxContact className="d-flex justify-center flex-column">
        <span className="text-white">Entre em contato</span>
        <Email
          href="mailto:comercial@jussi.com.br?subject=Quero%20ter%20minha%20loja%20VTEX"
          className="text-white"
        >
          comercial@jussi.com.br
        </Email>
      </BoxContact>
    </Content>
  </div>
);

export default Contact;
