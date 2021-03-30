import React, { FC } from 'react';
import Image from 'next/image';

import { Title, Button } from 'components';
import { Container, Content, Text, BoxImage } from './styles';

const About: FC = () => {
  const openJussi = () => window.open('http://jussi.com.br/', '_blank');

  return (
    <Container id="about-jussi">
      <div className="container d-flex justify-between">
        <Content>
          <Title>OLÁ, SOMOS A JÜSSI</Title>
          <Text>
            A Jüssi é uma agência integrante do grupo global WPP que vem há 10
            anos consolidando o pensamento voltado para produtos e resolução de
            problemas. Nosso área dedicada exclusivamente para Produtos Digitais
            é organizada em 6 especialidades: Product Managamenet, User
            Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.
          </Text>
          <Button onClick={openJussi} color="black" outline>
            Conheça a Jüssi
          </Button>
        </Content>
        <BoxImage>
          <Image src="/jussi.png" width={676} height={520} />
        </BoxImage>
      </div>
    </Container>
  );
};

export default About;
