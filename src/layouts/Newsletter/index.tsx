import React, { FC, useState, FormEvent } from 'react';
import { toast } from 'react-toastify';

import { Title, Button } from 'components';
import { Content, Form, Input } from './styles';

const Newsletter: FC = () => {
  const [email, setEmail] = useState('');

  const sendRegisterNewsletter = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success(`Email ${email} cadastrado com sucesso!`);
  };

  return (
    <div className="bg-black text-center">
      <Content>
        <Title color="white" bars>
          RECEBA NOVIDADES DA NOSSA ÁREA DE PRODUTOS DIGITAIS.
        </Title>
        <Form
          className="d-flex justify-between"
          onSubmit={sendRegisterNewsletter}
        >
          <Input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" color="primary" outline>
            CADASTRAR
          </Button>
        </Form>
      </Content>
    </div>
  );
};

export default Newsletter;
