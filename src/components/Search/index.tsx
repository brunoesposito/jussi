import React, { FC, useState, useRef, FormEvent } from 'react';

import { Icon, Button, Modal } from 'components';
import { Form, Input } from './styles';

import { Props } from './types';

const Search: FC<Props> = ({ placeholder = 'Digite aqui' }) => {
  const modalRef = useRef<PropsModal>(null);
  const [text, setText] = useState('');

  const sendTextToSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    modalRef.current.toogleModal();
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
      <Modal ref={modalRef}>
        <h2>
          Você digitou: <span className="text-secondary">{`"${text}"`}</span>
        </h2>
      </Modal>
    </>
  );
};

export default Search;
