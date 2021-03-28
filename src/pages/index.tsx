import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

import { Search, Brand, Icon } from 'components';
import {
  Header,
  BoxMenu,
  BoxBrand,
  Options,
  Access,
  Cart,
  Menu,
} from 'styles/home';

const Home: NextPage = () => (
  <>
    <Header>
      <div className="container d-flex justify-between">
        <div className="d-flex">
          <BoxMenu>
            <Icon name="menu-mobile" alt="Menu" />
          </BoxMenu>
          <BoxBrand>
            <Brand />
          </BoxBrand>
          <Menu className="list-inline">
            <li>Nossas soluções</li>
            <li>Conheça a Jüssi</li>
          </Menu>
        </div>
        <Options className="d-flex">
          <Search />
          <Access>
            <Link href="/">Login</Link>
          </Access>
          <Cart>
            <Link href="/">
              <a>
                <Icon name="cart" alt="Carrinho" />
              </a>
            </Link>
          </Cart>
        </Options>
      </div>
    </Header>
    <div className="container">
      <p>Base Template</p>
    </div>
  </>
);

export default Home;
