import React, { FC } from 'react';
import Image from 'next/image';

import { Button } from 'components';
import { Container, Content, Title, Text, BoxImage } from './styles';

const Banner: FC = () => (
  <Container className="bg-primary">
    <div className="container d-flex justify-between">
      <Content>
        <Title>
          <span>//</span>
          CRIAMOS LOJAS QUE VENDEM MAIS.
        </Title>
        <Text>
          A Jüssi é especialista na criação de lojas usando a plataforma VTEX.
          Precisa criar sua loja ou migrar de plataforma?
        </Text>
        <Button color="black" outline>
          Veja nossas soluções
        </Button>
      </Content>
      <BoxImage>
        <Image src="/banner.png" width={460} height={480} layout="responsive" />
      </BoxImage>
    </div>
  </Container>
);

export default Banner;
