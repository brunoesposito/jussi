import React, { FC } from 'react';
import Image from 'next/image';

import { Title, Button } from 'components';
import { Container, Content, Text, BoxImage, Link } from './styles';

const About: FC = () => (
  <Container id="about-jussi">
    <div className="container d-flex justify-between">
      <Content>
        <Title>OLÁ, SOMOS A JÜSSI</Title>
        <Text>
          A Jüssi é uma agência integrante do grupo global WPP que vem há 10
          anos consolidando o pensamento voltado para produtos e resolução de
          problemas. Nosso área dedicada exclusivamente para Produtos Digitais é
          organizada em 6 especialidades: Product Managamenet, User Experience
          Design, SEO, Tecnologia, Agile e User Behavior Analytics.
        </Text>
        <Button color="black" outline>
          Conheça a Jüssi
        </Button>
      </Content>
      <BoxImage>
        <Link href="http://jussi.com.br/" target="_blank">
          <Image src="/jussi.png" width={676} height={520} />
        </Link>
      </BoxImage>
    </div>
  </Container>
);

export default About;
