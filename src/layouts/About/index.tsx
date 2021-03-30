import React, { FC } from 'react';
import Image from 'next/image';

import { Title } from 'components';

const About: FC = () => (
  <div>
    <div className="container d-flex justify-between">
      <div>
        <Title>OLÁ, SOMOS A JÜSSI</Title>
        <p>
          A Jüssi é uma agência integrante do grupo global WPP que vem há 10
          anos consolidando o pensamento voltado para produtos e resolução de
          problemas. Nosso área dedicada exclusivamente para Produtos Digitais é
          organizada em 6 especialidades: Product Managamenet, User Experience
          Design, SEO, Tecnologia, Agile e User Behavior Analytics.
        </p>
      </div>
      <Image src="/jussi.png" width={676} height={520} />
    </div>
  </div>
);

export default About;
