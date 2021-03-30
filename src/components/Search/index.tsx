import React, { FC, useState, FormEvent } from 'react';

import { Icon, Button } from 'components';
import {
  Form,
  Input,
  BoxResult,
  ResultCloseBg,
  ResultContent,
  ResultClose,
} from './styles';

import { Props } from './types';

const Search: FC<Props> = ({ placeholder = 'Digite aqui' }) => {
  const [text, setText] = useState('');
  const [modalResult, setModalResult] = useState(false);

  const toogleModalResult = () => setModalResult(!modalResult);

  const sendTextToSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toogleModalResult();
  };

  return (
    <>
      <Form className="d-flex justify-between" onSubmit={sendTextToSearch}>
        <Input
          type="text"
          placeholder={placeholder}
          value={text}
          required
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit" color="white" background="white" outline>
          <Icon name="search" alt={placeholder} />
        </Button>
      </Form>
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
