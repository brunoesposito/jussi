import React, { FC, useState } from 'react';

import Icon from '../Icon';
import {
  Box,
  Button,
  Input,
  BoxResult,
  ResultCloseBg,
  ResultContent,
  ResultClose,
} from './styles';

import { Props } from './types';

const Search: FC<Props> = ({ placeholder = 'Digite aqui' }) => {
  const [text, setText] = useState('');
  const [error, setError] = useState(false);
  const [modalResult, setModalResult] = useState(false);

  const toogleModalResult = () => setModalResult(!modalResult);

  const getTextAndSearch = () => {
    if (text) {
      setError(false);
      return toogleModalResult();
    }

    setError(true);
  };

  return (
    <>
      <Box>
        <Input
          type="text"
          placeholder={placeholder}
          value={text}
          error={error}
          onChange={(e) => setText(e.target.value)}
        />
        <Button onClick={getTextAndSearch}>
          <Icon name="search" alt={placeholder} />
        </Button>
      </Box>
      {modalResult && (
        <BoxResult>
          <ResultCloseBg onClick={toogleModalResult} />
          <ResultContent>
            <ResultClose
              className="bg-secondary d-flex justify-center"
              onClick={toogleModalResult}
            >
              <Icon
                name="close"
                alt="Fechar menu mobile"
                width={15}
                height={15}
              />
            </ResultClose>
            <h2>
              Você digitou:{' '}
              <span className="text-secondary">{`"${text}"`}</span>
            </h2>
          </ResultContent>
        </BoxResult>
      )}
    </>
  );
};

export default Search;
