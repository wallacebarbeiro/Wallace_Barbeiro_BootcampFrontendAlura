import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Navbar from './Navbar';

const Header = styled.header`
  position: fixed;
  z-index: 1; 
  width:100% ;
  background-color: #e4168a;
  padding: 10px;
  min-height: 20px;
  z-index: 2;
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
          href="https://github.com/wallacebarbeiro"
        />
        <Navbar
          fontSize={{
            xs: '16px',
            md: '16px',
          }}
          textTransform="uppercase"
          links={{ Sobre: '/sobre', Contato: '/contato' }}
        />
      </NavContainer>
    </Header>
  );
}
