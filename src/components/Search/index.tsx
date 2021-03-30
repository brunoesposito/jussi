import React, { FC, useState, useRef, FormEvent } from 'react';
import axios from 'axios';

import { Icon, Button, Modal } from 'components';
import { Form, Input, Link } from './styles';

import { Props, DataSearch, ItemSearch } from './types';

const Search: FC<Props> = ({ placeholder = 'Digite aqui' }) => {
  const modalRef = useRef<PropsModal>(null);

  const [text, setText] = useState('');
  const [searchItens, setSearchItens] = useState<ItemSearch>([]);

  const sendTextToSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchItens([]);
    modalRef.current.toogleModal();

    const { data }: DataSearch = await axios.get(`/api/search/${text}`);
    setSearchItens(data.items);
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
      <Modal ref={modalRef} title={`Você digitou: ${text}`}>
        {Object.keys(searchItens).length === 0 && <p>Carregando...</p>}
        {searchItens.map(({ title, snippet, formattedUrl }) => (
          <Link href={formattedUrl} target="_blank" key={title}>
            <b className="text-secondary">{title}</b>
            <p>
              <i>{snippet}</i>
            </p>
          </Link>
        ))}
      </Modal>
    </>
  );
};

export default Search;
