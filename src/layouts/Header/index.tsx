import React, { FC, useState } from 'react';
import Link from 'next/link';

import { Search, Brand, Icon } from 'components';
import {
  Container,
  BoxMenu,
  BoxBrand,
  Options,
  Access,
  Cart,
  Menu,
  MenuMobile,
  MenuCloseBg,
  MenuClose,
  MobileContent,
  MobileOptions,
  MobilePages,
} from './styles';

const Header: FC = () => {
  const [viewMobileMenu, setViewMobileMenu] = useState(false);

  const toogleMobileMenu = () => setViewMobileMenu(!viewMobileMenu);

  return (
    <>
      <Container>
        <div className="container d-flex justify-between">
          <div className="d-flex">
            <BoxMenu onClick={toogleMobileMenu}>
              <Icon name="menu-mobile" alt="Menu" />
            </BoxMenu>
            <BoxBrand>
              <Brand />
            </BoxBrand>
            <Menu className="list-inline">
              <li>
                <Link href="/">Nossas soluções</Link>
              </li>
              <li>
                <Link href="/">Conheça a Jüssi</Link>
              </li>
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
      </Container>
      {viewMobileMenu && (
        <MenuMobile>
          <MenuCloseBg onClick={toogleMobileMenu} />
          <MobileContent>
            <MenuClose
              className="d-flex justify-center"
              onClick={toogleMobileMenu}
            >
              <Icon
                name="close"
                alt="Fechar menu mobile"
                width={15}
                height={15}
              />
            </MenuClose>
            <MobileOptions className="bg-grey">
              <h3>Menu</h3>
              <ul>
                <li>
                  <Link href="/">Nossas soluções</Link>
                </li>
                <li>
                  <Link href="/">Conheça a Jüssi</Link>
                </li>
              </ul>
            </MobileOptions>
            <MobilePages>
              <Link href="/">Login</Link>
            </MobilePages>
            <MobilePages>
              <Link href="/">Carrinho</Link>
            </MobilePages>
          </MobileContent>
        </MenuMobile>
      )}
    </>
  );
};

export default Header;
