import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Navbar from './Navbar';

const Header = styled.header`
  position: fixed;
  width:100% ;
  background-color: #e4168a;
  padding: 10px;
  min-height: 20px;
  z-index: 2;
  left:0px;
`;

const NavContainer = styled.nav`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const links = [
  {
    texto: 'home',
    url: '/',
  },
  {
    texto: 'Sobre',
    url: '/sobre',
  },
  {
    texto: 'contato',
    url: '/contato',
  },
];

export default function Cabecalho() {
  return (
    <Header>
      <NavContainer>
        <Logo
          color="white"
          fontSize={{
            xs: '20px',
            md: '22px',
          }}
          href={links[0].url}
        />
        <Navbar
          fontSize={{
            xs: '16px',
            md: '16px',
          }}
          textTransform="uppercase"
          links={links}
        />
      </NavContainer>
    </Header>
  );
}
