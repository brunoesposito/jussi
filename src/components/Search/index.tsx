import React, { FC } from 'react';

import Icon from '../Icon';
import { Box, Button, Input } from './styles';

type Props = {
  placeholder?: string;
};

const Search: FC<Props> = ({ placeholder = 'Buscar' }) => (
  <Box>
    <Input type="text" placeholder={placeholder} />
    <Button>
      <Icon name="search" alt={placeholder} />
    </Button>
  </Box>
);

export default Search;
