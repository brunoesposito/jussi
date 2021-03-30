import React, { FC } from 'react';

import {
  Box,
  Identification,
  BoxInfo,
  Name,
  Description,
  FeatureList,
  Button,
} from './styles';

const Product: FC<PropsProduct> = ({
  identification,
  name,
  description,
  feature,
  onClick,
}) => (
  <Box>
    <Identification className="bg-grey text-center">
      {identification}
    </Identification>
    <BoxInfo>
      <Name>{name}</Name>
      <Description className="text-secondary">{description}</Description>
      <FeatureList>
        {feature.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </FeatureList>
      <Button onClick={onClick} color="black" background="primary">
        Ver solução
      </Button>
    </BoxInfo>
  </Box>
);

export default Product;
