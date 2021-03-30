import React, { FC } from 'react';

import { Title } from 'components';

const Contact: FC = () => (
  <div className="bg-secondary text-center">
    <div className="container">
      <Title color="white">
        ESSA LOJA FOI CONSTRUÍDA USANDO UMA DAS NOSSAS SOLUÇÕES DA PLATAFORMA
        VTEX. TENHA A SUA.
      </Title>
      <div className="d-flex justify-center flex-column">
        <span className="text-white">Entre em contato</span>
        <span className="text-white">comercial@jussi.com.br</span>
      </div>
    </div>
  </div>
);

export default Contact;
